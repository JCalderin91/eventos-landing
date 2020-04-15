<template>
  <div class="card mb-3">
    <h5>
      <router-link class="name-service" href="#" :to="{name:'service', params: {id:service.id}}">
        {{service.nombre_servicio}}
      </router-link>
    </h5>
    <p class="parraf">{{service.descripcion_servicio}}</p>
    <hr>
    <div class="service-categories">
      <div class="badge badge-info mr-2" v-for="i in Math.floor(Math.random()* (5-1)+1)" :key="i">
        <i class="fa fa-plus"></i>
        Detalle {{i}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      required: true
    },
  }
}
</script>

<style lang="scss" scope>
  .name-service{
    font-size: 18px;
    color: #444;
    font-weight: bold;
  }
</style>