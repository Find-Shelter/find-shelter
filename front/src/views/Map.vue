<template>
    <div class="main">
        <div class="flex">
            <!-- Map Display here -->
            <div class="map-holder">
                <div id="map"></div>
            </div>

            <!-- Coordinates Display here -->
            <div class="display-arena">
                <div class="coordinates-header">
                    <h3>Current Coordinates</h3>
                    <p>Latitude: {{ parseFloat(center[0].toFixed(5)) }}</p>
                    <p>Longitude: {{ parseFloat(center[1].toFixed(5)) }}</p>
                </div>

                <div class="coordinates-header">
                    <h3>Current Location</h3>

                    <div class="form-group">
                        <input
                            type="text"
                            class="location-control"
                            :value="location"
                            readonly
                        />
                        <button
                            type="button"
                            class="copy-btn"
                            @click="copyLocation"
                        >
                            Copy
                        </button>
                    </div>

                    <button
                        type="button"
                        :disabled="loading"
                        :class="{ disabled: loading }"
                        class="location-btn"
                        @click="getLocation"
                    >
                        Get Location
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

export default {
    data() {
        let center = [0, 0];
        return {
            loading: false,
            location: "",
            access_token: process.env.VUE_APP_MAP_ACCESS_TOKEN,
            center: center,
            map: {},
        };
    },
    mounted() {
        this.createMap();
    },
    methods: {
        async getCurrentPosition() {
            return new Promise((res, rej) =>
                navigator.geolocation.getCurrentPosition(res, rej)
            );
        },
        async createMap() {
            let self = this;
            try {
                mapboxgl.accessToken = this.access_token;
                this.map = new mapboxgl.Map({
                    container: "map",
                    style: "mapbox://styles/mapbox/streets-v11",
                    center: this.center,
                    zoom: 11,
                });

                this.map.on("load", async function () {
                    let position = {
                        coords: { longitude: 30.5234, latitude: 50.4501 },
                    };
                    try {
                        position = await self.getCurrentPosition();
                    } catch (e) {
                        console.error(e);
                    }

                    this.jumpTo({
                        center: [
                            position.coords.longitude,
                            position.coords.latitude,
                        ],
                        zoom: 15,
                        bearing: 0,
                    });
                });

                let geocoder = new MapboxGeocoder({
                    accessToken: this.access_token,
                    mapboxgl: mapboxgl,
                    marker: false,
                    flyTo: {
                        zoom: 15,
                        bearing: 0,
                        speed: 10,
                        curve: 10,
                        easing: (t) => t,
                        essential: false,
                    },
                });
                this.map.addControl(geocoder);
                geocoder.on("result", (e) => {
                    const marker = new mapboxgl.Marker({
                        draggable: true,
                        color: "#D80739",
                    })
                        .setLngLat(e.result.center)
                        .addTo(this.map);
                    this.center = e.result.center;
                    marker.on("dragend", (e) => {
                        this.center = Object.values(e.target.getLngLat());
                    });
                });
            } catch (err) {
                console.error("map error", err);
            }
        },
        async getLocation() {
            try {
                this.loading = true;
                const response = await axios.get(
                    `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.center[0]},${this.center[1]}.json?access_token=${this.access_token}`
                );
                this.loading = false;
                this.location = response.data.features[0].place_name;
            } catch (err) {
                this.loading = false;
                console.error(err);
            }
        },
        copyLocation() {
            if (this.location) {
                navigator.clipboard.writeText(this.location);
                alert("Location Copied");
            }
            return;
        },
    },
};
</script>

<style scoped>
.main {
    padding: 45px 50px;
}
.flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.map-holder {
    width: 65%;
}
#map {
    height: 70vh;
}
.display-arena {
    background: #ffffff;
    box-shadow: 0px -3px 10px rgba(0, 58, 78, 0.1);
    border-radius: 5px;
    padding: 20px 30px;
    width: 25%;
}
.coordinates-header {
    margin-bottom: 50px;
}
.coordinates-header h3 {
    color: #1f2a53;
    font-weight: 600;
}
.coordinates-header p {
    color: rgba(13, 16, 27, 0.75);
    font-weight: 600;
    font-size: 0.875rem;
}
.form-group {
    position: relative;
}
.location-control {
    height: 30px;
    background: #ffffff;
    border: 1px solid rgba(31, 42, 83, 0.25);
    box-shadow: 0px 0px 10px rgba(73, 165, 198, 0.1);
    border-radius: 4px;
    padding: 0px 10px;
    width: 90%;
}
.location-control:focus {
    outline: none;
}
.location-btn {
    margin-top: 15px;
    padding: 10px 15px;
    background: #d80739;
    box-shadow: 0px 4px 10px rgba(73, 165, 198, 0.1);
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    color: #ffffff;
    font-size: 0.875rem;
    font-weight: 600;
}
.location-btn:focus {
    outline: none;
}
.disabled {
    background: #db7990;
    cursor: not-allowed;
}
.copy-btn {
    background: #f4f6f8 0% 0% no-repeat padding-box;
    border: 1px solid #f4f6f8;
    border-radius: 0px 3px 3px 0px;
    position: absolute;
    color: #5171ef;
    font-size: 0.875rem;
    font-weight: 500;
    height: 30px;
    padding: 0px 10px;
    cursor: pointer;
    right: 3.5%;
    top: 5%;
}
.copy-btn:focus {
    outline: none;
}
</style>
