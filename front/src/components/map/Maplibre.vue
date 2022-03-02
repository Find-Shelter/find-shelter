<template>
    <div class="map-holder">
        <div id="map"></div>
    </div>
</template>

<script>
import maplibregl from "maplibre-gl";
import MaplibreGeocoder from "@maplibre/maplibre-gl-geocoder";
import "@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css";
import "maplibre-gl/dist/maplibre-gl.css";
import axios from "axios";

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
                maplibregl.accessToken = this.access_token;
                this.map = new maplibregl.Map({
                    container: "map",
                    style: {
                        version: 8,
                        name: "Blank",
                        center: [0, 0],
                        zoom: 0,
                        sources: {
                            "raster-tiles": {
                                type: "raster",
                                tiles: [
                                    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
                                ],
                                tileSize: 256,
                                minzoom: 0,
                                maxzoom: 19,
                            },
                        },
                        layers: [
                            {
                                id: "background",
                                type: "background",
                                paint: {
                                    "background-color": "#e0dfdf",
                                },
                            },
                            {
                                id: "simple-tiles",
                                type: "raster",
                                source: "raster-tiles",
                            },
                        ],
                        id: "blank",
                    },
                    center: this.center,
                    zoom: 11,
                    antialias: true,
                });

                this.map.on("load", async function () {
                    let position = {
                        // 🇺🇦 Defaults to coordinates of Kyiv
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
                        zoom: 12,
                        bearing: 0,
                    });
                });

                const geocoder_api = {
                    forwardGeocode: async (config) => {
                        const features = [];
                        try {
                            const request = `${process.env.VUE_APP_API_HOST}/api/maplibre`;
                            const geojson = (
                                await axios.get(request, {
                                    params: { query: config.query },
                                })
                            ).data;
                            for (const feature of geojson.features) {
                                const center = [
                                    feature.bbox[0] +
                                        (feature.bbox[2] - feature.bbox[0]) / 2,
                                    feature.bbox[1] +
                                        (feature.bbox[3] - feature.bbox[1]) / 2,
                                ];
                                const point = {
                                    type: "Feature",
                                    geometry: {
                                        type: "Point",
                                        coordinates: center,
                                    },
                                    place_name: feature.properties.display_name,
                                    properties: feature.properties,
                                    text: feature.properties.display_name,
                                    place_type: ["place"],
                                    center: center,
                                };
                                features.push(point);
                            }
                        } catch (e) {
                            console.error(
                                `Failed to forwardGeocode with error: ${e}`
                            );
                        }

                        return {
                            features: features,
                        };
                    },
                };

                const geocoder = new MaplibreGeocoder(geocoder_api, {
                    maplibregl: maplibregl,
                    flyTo: { duration: 0 },
                    showResultsWhileTyping: true,
                });
                this.map.addControl(geocoder);

                geocoder.on("result", (e) => {
                    const marker = new maplibregl.Marker({
                        draggable: true,
                        color: "red",
                    })
                        .setLngLat(e.result.center)
                        .addTo(this.map);
                    this.center = e.result.center;
                    const markerEl = marker.getElement();
                    markerEl.style.cursor = "pointer";
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
    width: 100%;
}
#map {
    height: 70vh;
}
</style>
