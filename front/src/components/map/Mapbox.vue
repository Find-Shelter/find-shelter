<template>
    <div class="map-holder">
        <div id="map"></div>
    </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

export default {
    data() {
        return {
            access_token: process.env.VUE_APP_MAP_ACCESS_TOKEN,
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
    },
};
</script>

<style scoped>
.map-holder {
    width: 65%;
}
#map {
    height: 70vh;
}
</style>
