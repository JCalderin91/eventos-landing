<template>

    <l-map  id="map" :zoom="zoom" :center="haveMarkers ? centerMapResults : center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <template v-if="haveMarkers">
        <l-marker  v-for="(m,i) in markersToShow" :key="i" :lat-lng="m">
          <l-tooltip :content="markers[i].name"></l-tooltip>
        </l-marker>
      </template>
      <l-marker v-else :lat-lng="marker">
        <l-tooltip :content="toltip"></l-tooltip>
      </l-marker>
    </l-map>


</template>


<script>
import L from 'leaflet';
import {
  LMap,
  LTileLayer,
  LMarker,
  LTooltip,
} from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import {
  Icon
} from 'leaflet'
import { mapMutations, mapState } from 'vuex';

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip
  },
  props: {
    lat: {
      type: String,
      required: true
    },
    lng: {
      type: String,
      required: true
    },
    markers: {
      type: Array,
      default: () => ([])
    },
    toltip: {
      type: String,
      default: '', 
    }
  },
  data: () => ({
    zoom: 12,
    url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    marker: L.latLng(0, 0),
    attribution: '',   
    center:  L.latLng(0,0),
  }),
  created(){
    this.marker = L.latLng(this.lat, this.lng)

    if(this.markers.length>0){
      this.setCenterMapResults(L.latLng(this.markers[0].lat, this.markers[0].lng))
    }else{
      this.center = L.latLng(this.lat, this.lng)
    }
  },
  methods:{
    ...mapMutations(['setCenterMapResults'])
  },
  computed: {
    ...mapState(['centerMapResults']),
    markersToShow(){
      if(this.markers.length>0)
        return this.markers.map( m => L.latLng(m.lat, m.lng) )
      return []
    },
    haveMarkers(){
      return this.markers.length>0
    },        
  }, 
}
</script>

<style lang="scss" scope>
.leaflet-control-attribution.leaflet-control{
  display: none;
}
.vue2leaflet-map{
  max-height: 100%;
  height: 100%;
  max-width: 100%;
  width: 100%;
}
</style>