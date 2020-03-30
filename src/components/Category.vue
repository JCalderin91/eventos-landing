<template>
  <!--================================CATEGORY SECTION ==========================================-->

  <section class="categories-section padding-bottom-70">
    <!-- content area column -->
    <div class="container">
      <div class="section-title-nav section-title-wrap shadow-1 bgwhite padding-bottom-30 padding-top-30 margin-bottom-50">
        <!-- section title -->
        <h5>Nuestras <span>Categorias</span></h5>
        <div class="owl-nav">
          <div @click="move('prev')" class="owl-prev"><i class="fa fa-angle-left"></i></div>
          <div @click="move('next')" class="owl-next"><i class="fa fa-angle-right"></i></div>
        </div>
      </div><!-- section title end -->

      <carousel :nav="false" :dots="false" class="category-section-wrap cat-style-3 cat-slider clearfix">
        <template slot="prev"><span id="prev" class="prev"></span></template>
        <template slot="next"><span id="next" class="next"></span></template>
        <div class="main-wrap">
          <!-- category column -->
          <div class="cat-wrap shadow-1">
            <div class="cat-wrap-inner">
              <p><i class="fa fa-home yallow-1 white"></i></p>
              <h5><a href="#">Real Estate</a></h5>
            </div>
          </div>
        </div><!-- category column end -->
        <div class="main-wrap">
          <!-- category column -->
          <div class="cat-wrap shadow-1">
            <div class="cat-wrap-inner">
              <p><i class="fa fa-paper-plane yallow-1 white"></i></p>
              <h5><a href="#">Hotels & Travel</a></h5>
            </div>
          </div>
        </div><!-- category column end -->
        <div class="main-wrap">
          <!-- category column -->
          <div class="cat-wrap shadow-1">
            <div class="cat-wrap-inner">
              <p><i class="fa fa-suitcase yallow-1 white"></i></p>
              <h5><a href="#">Jobs</a></h5>
            </div>
          </div>
        </div><!-- category column end -->
        <div class="main-wrap">
          <!-- category column -->
          <div class="cat-wrap shadow-1">
            <div class="cat-wrap-inner">
              <p><i class="fa fa-heart yallow-1 white"></i></p>
              <h5><a href="#">Health & Fitness</a></h5>
            </div>
          </div>
        </div><!-- category column end -->
        <div class="main-wrap">
          <!-- category column -->
          <div class="cat-wrap shadow-1">
            <div class="cat-wrap-inner">
              <p><i class="fa fa-female yallow-1 white"></i></p>
              <h5><a href="#">entertainment</a></h5>
            </div>
          </div>
        </div><!-- category column end -->
        <div class="main-wrap">
          <!-- category column -->
          <div class="cat-wrap shadow-1">
            <div class="cat-wrap-inner">
              <p><i class="fa fa-eye yallow-1 white"></i></p>
              <h5><a href="#">beauty & spas</a></h5>
            </div>
          </div>
        </div><!-- category column end -->
      </carousel>
    </div>
    <!--/container-->
  </section>
</template>

<script>
  import carousel from 'vue-owl-carousel'

  export default {
    components: {
      carousel
    },
    methods: {
      move(dir){
        document.getElementById(dir).click()        
      }
    }
  }
</script>

<style lang="scss" scope>
  .categories-section{
    margin-top: 30px;
    .section-title-nav{
      display: flex;
      justify-content: space-between;
      h5{
        padding-top: 10px;
      }
      .owl-nav{
        margin: 0 20px;
        div{
          text-align: center;
        }
      }
    }
  }
</style>