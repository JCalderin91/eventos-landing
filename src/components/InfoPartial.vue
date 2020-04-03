<template>
  <div id="info-card" class="card mb-3">
    <div class="contact-info">
      <img src="images/map.jpg" class="img-fluid" alt="#">
      <div class="item">
        <span class="fa fa-map"></span>
        <p>{{provider.direccion_domicilio}}</p>
      </div>
      <div class="item">
        <span class="fa fa-phone"></span>
        <p> +44 20 7336 8898</p>
      </div>
      <div class="item">
        <span class="fa fa-link"></span>
        <p>https://burgerandlobster.com</p>
      </div>
      <div class="item">
        <span class="fa fa-calendar"></span>
        <p>Mon - Sun 09:30 am - 05:30 pm </p>
      </div>
      <a href="#" class="featured-open">Abierto</a>
    </div>    
  </div>
</template>

<script>
export default {
  props: {
    provider: {
      type: Object,
      required: true
    }
  }
}
</script>


<style lang="scss" scope>
  #info-card{
    .item{
      display: flex;
      padding: 10px;
      span{
        padding: 5px 15px 5px 0px;
      }
 
    }
    .featured-open{
      margin-bottom: 5px;
      text-transform: uppercase;
    }
  }
</style>