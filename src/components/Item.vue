<template>
  <div>
    <img src="images/listings/370x300/05.jpg" alt="feature item" />
    <div class="card">
      <h6>{{item.nombre_servicio}}</h6>
      <div class="d-flex justify-content-between align-items-center mt-2">
        <div class="btn btn-success">8.0 <i class="fa fa-trophy"></i></div>
        <span>$ {{item.monto_servicio}}</span>
      </div>
      <br>
      <p class="text-content">
        {{item.descripcion_servicio}}
      </p>
      <div class="mask"></div>
      <router-link :to="{name:'service', params: {id:item.id}}" class="text-center mt-2">Mas información</router-link>
      <hr>
      <div class="row">
        <div class="col-md-6 text-uppercase">
          <p><i class="fa fa-map-marker"></i>
          Cumanacoa</p>
        </div>
        <div class="col-md-6 text-uppercase">
          <p class="text-success text-right">Abierto</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {

      required: true,
    }
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
</style>