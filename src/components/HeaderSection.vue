<template>
  <!--================================ STATIC HEADER SECTION==========================================-->

  <section class="static-section">
    <div class="container">
      <div class="static-header-content">
        <div class="static-header-text">
          <h1 class="white">EVENTOS<span>OK</span></h1>
          <h3 class="white margin-bottom-30">Consultas nuestros proveedores por tu zona</h3>
        </div>
        <Search-form/>
      </div>
    </div>
  </section>
</template>

<script>
import SearchForm from '@/components/SearchForm'
export default {
  components: { SearchForm }
}
</script>