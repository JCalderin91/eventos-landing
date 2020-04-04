<template>
  <div>
    <img v-if="isCombo(item)" class="tag-combo" src="images/oferta.svg" alt="feature item" />

    <img src="images/listings/370x300/05.jpg" alt="feature item" />
    <div class="card">
      <h6>{{!isCombo(item) ? item.nombre_servicio :item.nombre_combo_servicio}}</h6>
      <div class="d-flex justify-content-between align-items-center mt-2">
        <div class="btn btn-success">8.0 <i class="fa fa-trophy"></i></div>
        <span>$ {{!isCombo(item)? item.monto_servicio : item.monto_combo}}</span>
      </div>
      <br>
      <p class="text-content">
        {{!isCombo(item)?item.descripcion_servicio:item.descripcion_combo}}
      </p>
      <div class="mask"></div>
      <router-link v-if="isCombo(item)" :to="{name:'combo', params: {id:item.id}}" class="text-center mt-2">Mas información</router-link>
      <router-link v-else :to="{name:'service', params: {id:item.id}}" class="text-center mt-2">Mas información</router-link>
      <hr>
      <div class="row">
        <div class="col-md-6 text-uppercase">
          <a class="location-link" href="#" @click.prevent="makeSearch(item.provider.location.id)">
            <i class="fa fa-map-marker"></i>
            {{item.provider.location.name}}
          </a>
        </div>
        <div class="col-md-6 text-uppercase">
          <p class="text-success text-right">Abierto</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  props: {
    item: {
      required: true,
    }
  },
  methods:{
    ...mapActions(['search']),
    ...mapMutations(['setRequest']),
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
    }
  },
  computed: {
    ...mapState(['request'])
  }
}
</script>

<style lang="scss" scope>
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