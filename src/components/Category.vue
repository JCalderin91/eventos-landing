<template>
  <!--================================CATEGORY SECTION ==========================================-->

  <section class="categories-section padding-bottom-30">
    <!-- content area column -->
    <div class="container">
      <div
        class="section-title-nav section-title-wrap shadow-1 bgwhite padding-bottom-30 padding-top-30 margin-bottom-50">
        <!-- section title -->
        <h5>Nuestras <span>Categorias</span></h5>
        <div class="owl-nav">
          <div @click.prevent="slidePrev" class="owl-prev"><i class="fa fa-angle-left"></i></div>
          <div @click.prevent="slideNext" class="owl-next"><i class="fa fa-angle-right"></i></div>
        </div>
      </div><!-- section title end -->


      <hooper  ref="carousel" :settings="hooperSettings">
        <slide          
          class="category-section-wrap cat-style-3"
          v-for="(category, indx) in categories"
          :key="indx"
          :index="indx">
          <div class="main-wrap">
            <!-- category column -->
            <div class="cat-wrap shadow-1">
              <div class="cat-wrap-inner">
                <p><i :class="'yallow-1 white '+category.icono"></i></p>
                <h5><a href="#">{{category.nombre_servicio}}</a></h5>
              </div>
            </div>
          </div><!-- category column end -->

        </slide>

      </hooper>

    </div>
    <!--/container-->
  </section>
</template>

<script>

  import {mapState, mapActions} from 'vuex';

  import { Hooper, Slide } from 'hooper';
  import 'hooper/dist/hooper.css';

  export default {
    components: {
      Hooper,
      Slide
    },
    data(){
      return {
        categories: [],
        hooperSettings: {
          itemsToShow: 1,
          infiniteScroll: true,
          breakpoints: {
            575: {
              centerMode: false,
              itemsToShow: 2
            },
            992: {
              itemsToShow: 3,
              pagination: 'fraction'
            }
          }       
        }
      }
    },
    mounted(){
      this.getCategories()
        .then( res => this.categories = res )
        .catch( err => console.log(err) )
    },
    methods: {
      ...mapActions(['getCategories']),
      slidePrev() {
      this.$refs.carousel.slidePrev();
      },
      slideNext() {
        this.$refs.carousel.slideNext();
      },      
    },
    computed: {
      ...mapState(['baseUrl'])
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