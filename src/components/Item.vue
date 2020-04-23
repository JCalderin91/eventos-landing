<template>
  <div>
    <img v-if="isCombo(item)" class="tag-combo" :src="base+'/images/oferta.svg'" alt="feature item" />

    <img height="250" class="item-img" :src="serverUrl+'public/img/'+image" alt="feature item" />
    <div class="card">
      <h6>{{!isCombo(item) ? item.nombre_servicio :item.nombre_combo_servicio}}</h6>
      <div class="d-flex justify-content-between align-items-center mt-2">
        <div class="btn btn-success btn-sm">8.0 <i class="fa fa-trophy"></i></div>
        <span>$ {{!isCombo(item)? item.monto_servicio : item.monto_combo}}</span>
      </div>
      <br>
      <p class="text-content">
        {{!isCombo(item)?item.descripcion_servicio:item.descripcion_combo}}
      </p>
      <div class="mask"></div>
      <router-link v-if="isCombo(item)" :to="{name:'combo', params: {id:item.id}}" class="text-center mt-2">Mas información</router-link>
      <router-link v-else :to="{name:'service', params: {id:item.id}}" class="text-center mt-2">Mas información</router-link>
      <hr v-if="!profile" />
      <div v-if="!profile" class="row">
        <div class="col-6 text-uppercase">
          <a class="location-link d-inline" href="#" @click.prevent="moveMap(item.provider)">
            <i class="fa fa-map-marker"></i>
            {{item.provider.location.name}}
          </a>
        </div>
        <div class="col-6 text-uppercase">
          <p v-if="item.provider.is_working" class="text-success text-right">Abierto</p>
          <p v-else class="text-danger text-right">Cerrado</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import L from 'leaflet';
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  props: {
    item: {
      required: true,
    },
    profile: {
      type: Boolean,
      default: false
    },
  },
  methods:{
    ...mapActions(['search']),
    ...mapMutations(['setRequest','setCenterMapResults']),
    makeSearch(id){
      this.setRequest({
        keywords: '',
        category: 'all',
        location: id
      })
      this.search(this.request)
    },
    isCombo(item){
      return item.nombre_servicio ? false : true
    },
    moveMap(provider){
      this.setCenterMapResults(L.latLng(provider.latitud, provider.longitud))
    },
  },
  computed: {
    ...mapState(['request', 'base', 'serverUrl']),
    image(){
      if(this.item.images)
        return this.item.images[Math.floor(Math.random()*(this.item.images.length)+0)].video_img
      let imagenes = this.item.details[Math.floor(Math.random()*(this.item.details.length)+0)].images
      return imagenes = imagenes[Math.floor(Math.random()*(imagenes.length)+0)].video_img
    }
  }
}
</script>

<style lang="scss" scope>
.item-img{
  width: 100%;
  border-radius: 3px 3px 0 0;
}
  .rating {
    display: inline-block;
    background-color: #16e53e;
    margin-right: 10px;
    padding: 10px;
    border-radius: 3px;
    color: white;
  }
  .text-content{
    height: 100px;
    overflow: hidden;
  }
  .mask{
    background: linear-gradient(transparent, #fffffff2 100%);
    height: 40px;
    margin-top: -40px;
  }
  .location-link:hover i{
    color: var(--color) !important;
  }
  .tag-combo{
    position: absolute;
    z-index: 2;
    transform: rotate(-45deg);
    padding: 5px 50px;
    top: 2px;
    left: -35px;
    color: white;
    height: 80px;
  }

</style>