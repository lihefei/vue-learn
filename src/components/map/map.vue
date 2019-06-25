<template>
    <div class="map-wapper">
        <div class="map" id="map"></div>
    </div>
</template>

<script>
import Map from './map.js';
export default {
    name: '',
    data() {
        return {
            map: null,
            mapOverlay: {
                point: null,
                marker: null,
                circle: null
            },
            latLng: {
                lat: 39.915,
                lng: 116.404
            }
        };
    },
    mounted() {
        this.$nextTick(() => {
            Map().then(BMap => {
                console.log(BMap);
                this.initMap();
            });
        });
    },
    methods: {
        initMap() {
            this.map = new BMap.Map('map');
            this.mapOverlay.point = new BMap.Point(
                this.latLng.lng,
                this.latLng.lat
            );
            this.map.centerAndZoom(this.mapOverlay.point, 15);

            this.mapOverlay.marker = new BMap.Marker(this.mapOverlay.point); // 创建标注
            this.map.addOverlay(this.mapOverlay.marker);

            this.mapOverlay.circle = new BMap.Circle(
                this.mapOverlay.point,
                1000,
                {
                    strokeColor: 'blue',
                    strokeWeight: 2,
                    strokeOpacity: 0.5
                }
            ); //创建圆
            this.map.addOverlay(this.mapOverlay.circle);

            this.changePosition();
        },
        changePosition() {
            setInterval(
                function() {
                    this.mapOverlay.point = new BMap.Point(116.414, 39.915);

                    this.mapOverlay.marker.setPosition(this.mapOverlay.point);
                    this.mapOverlay.circle.setCenter(this.mapOverlay.point);
                }.bind(this),
                1000
            );
        }
    }
};
</script>

<style scoped>
.map-wapper,
.map {
    height: 100%;
}
</style>
