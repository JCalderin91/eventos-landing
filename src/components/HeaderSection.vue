<template>
  <!--================================ STATIC HEADER SECTION==========================================-->

  <section class="static-section">
    <div class="container">
      <div class="static-header-content">
        <div class="static-header-text">
          <h1 class="title white">EVENTOS<span>OK</span></h1>
          <h3 class="sub-title white margin-bottom-30">Consultas nuestros proveedores por tu zona</h3>
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

<style lang="scss" scope>
  @media only screen and (max-width: 768px){
    .static-header-text{
      .title{
        font-size: 50px;
      }
      .sub-title{
        font-size: 30px;
      }
    }
  }
  @media only screen and (max-width: 490px){
    .static-header-text{
      .title{
        font-size: 40px;
      }
      .sub-title{
        font-size: 15px;
      }
    }
  }
</style>