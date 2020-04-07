<template>
  <section class="404-section padding-bottom-100">
    <div class="container padding-top-60">
      <!-- section container -->
      <div class="error-404">
        <h3>Zona privada</h3>
        <h6 class="mt-3">Debe iniciar session para acceder a esta sección</h6>
      </div>
    </div><!-- section container end -->
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  mounted(){
    this.toggleModal('login-form')
  },
  methods: {
    ...mapMutations(['toggleModal'])
  }
}
</script>