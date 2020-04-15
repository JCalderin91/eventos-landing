<template>
  <!--================================CALLOUT SECTION==========================================-->

  <section class="callout-section padding-top-100 padding-bottom-100 bgwhite">
    <div class="container">
      <!-- section container -->
      <div class="callout-wrapper">
        <div class="callout-1">
          <div class="callout-message">
            <!--blog entry column-->
            <h2 class="white">Forma parte de nuestros proveedores</h2>
            <h4 class="white">solo en dos partes registrate y  agregas tus servicios</h4>
          </div>
          <!--blog entry column end-->
          <div class="callout-btns">
            <!--blog entry column-->
            <router-link tag="a" class="bgwhite c333" :to="{name:'legals'}">Condiciones</router-link>
            <a class="bgyallow-1 c333" @click.prevent="toggleModal('provider-register')">registrate</a>
          </div>
          <!--blog entry column end-->
        </div>
      </div>
    </div><!-- section container end -->
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['toggleModal'])
  }
}
</script>

<style lang="scss" scope>
  a.bgyallow-1{
    cursor: pointer;
  }
</style>