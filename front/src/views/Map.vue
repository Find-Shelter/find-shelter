<template>
    <div class="main">
        <div class="flex">
            <Maplibre />
        </div>
    </div>
</template>

<script>
import Maplibre from "../components/map/Maplibre.vue";

export default {
    components: { Maplibre },
    data() {
        let center = [0, 0];
        return {
            loading: false,
            location: "",
            center: center,
        };
    },
    methods: {},
};
</script>

<style scoped>
.main {
    padding: 50px 50px;
}
.flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>
