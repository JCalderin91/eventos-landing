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
      <p>{{item.descripcion_servicio}}</p>
      <hr>
      <div class="row">
        <div class="col-md-6 text-uppercase">
          <p><i class="fa fa-map-marker"></i>
          Cumanacoa</p>
        </div>
        <div class="col-md-6 text-uppercase">
          <p class="text-success">Abierto</p>
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
</style>