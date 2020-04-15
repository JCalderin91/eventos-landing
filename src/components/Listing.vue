<template>
  <!--================================LISTING SECTION ==========================================-->

  <section class="listing-section padding-top-60 padding-bottom-30 bgwhite">
    <div class="container">
      <!-- section container -->
      <div class="section-title-wrap margin-bottom-50">
        <!-- section title -->
        <h4>Servicios <span>recientes</span></h4>
        <div class="title-divider">
          <div class="line"></div>
          <div class="box"></div>
          <div class="line"></div>
        </div>
        <p class="text-center">We help new customers & search engines to find your business online</p>
        
      </div><!-- section title end -->
      <div class="add-listing-wrapper">
        <div class="listing-main gridview tab-content">
          <div id="latest-listing" class="tab-pane active">
            
            <div v-if="isLoading" class="progress">
              <div class="progress-bar progress-bar-striped progress-bar-animated bg-color" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
            </div>

            <div v-else class="listing-wrapper row">

              <div v-for="service in services" :key="service.id" class="item col-md-4 col-sm-6 col-xs-12">
                <!-- .ITEM -->
                <div class="listing-item clearfix">
                 <!-- <div v-if="isCombo(service)" class="tag-combo">Oferta</div> -->
                  <img v-if="isCombo(service)" class="tag-combo" src="images/oferta.svg" alt="feature item" />
                  <div class="figure">
                    <img height="250" :src="serverUrl+'public/img/'+imagen(service)" alt="feature item" />
                    <div class="item-love"><a href="#"><i class="fa fa-heart-o"></i><i class="fa fa-heart "></i></a>
                    </div>
                    <div class="hover-overlay">
                      <div class="hover-overlay-inner"></div>
                    </div>
                    <div class="listing-content clearfix">
                      <div v-if="!isCombo(service)" class="listing-meta-cat">
                        <a @click.prevent="makeSearch(service.sucategory_service.category_service.id, 'category')" class="bgyallow-1 c333" href="#">
                          {{ service.sucategory_service.category_service.nombre_servicio }}
                        </a>
                        <!-- <a class="bgyallow-1 c333" href="#">
                          {{ service.sucategory_service.nombre_subservicio }}
                        </a> -->
                      </div>
                      <div class="listing-title">
                        <h6 v-if="!isCombo(service)">
                          <router-link :to="{name:'service', params: {id:service.id}}">
                            {{isCombo(service) ? service.nombre_combo_servicio : service.nombre_servicio}}
                          </router-link>
                        </h6>
                        <h6 v-else>
                          <router-link :to="{name:'combo', params: {id:service.id}}">
                            {{isCombo(service) ? service.nombre_combo_servicio : service.nombre_servicio}}
                          </router-link>
                        </h6>
                        
                      </div>
                      <div class="listing-location pull-left">
                        <!-- location-->
                        <a @click.prevent="makeSearch(service.provider.location.id, 'location')" href="#"><i class="fa fa-map-marker"></i>{{service.provider.location.name}}</a>
                      </div><!-- location end-->
                      <div class="star-rating pull-right">
                        <!-- rating-->
                        <div class="score-callback" data-score="5"></div>
                      </div><!-- rating end-->
                    </div>
                  </div>
                </div>
              </div><!-- /.ITEM -->     

            </div>
          </div>
        </div>
      </div>
    </div><!-- section container end -->
  </section>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  data: () => ({
    services: [],
    isLoading: true,
  }),
  mounted(){
    this.getLastServices()
      .then( res => this.services = res )
      .catch( err => console.log(err) )
      .finally( () => this.isLoading = false)
    
  },
  methods: {
    ...mapActions(['getLastServices','search']),
    ...mapMutations(['setRequest']),
    isCombo(item){
      return item.nombre_servicio ? false : true
    },
    makeSearch(id, type){
      this.setRequest({
        keywords: '',
        category: type == 'category' ? id : 'all',
        location: type == 'location' ? id : 'all'
      })

      this.search(this.request)
        .then(res => {
          this.$router.push({name:'results', params: {results: res.data}})
        })
    },
    imagen(service){
      if(service.images)
        return service.images[Math.floor(Math.random()*(service.images.length)+0)].video_img
      let imagenes = service.details[Math.floor(Math.random()*(service.details.length)+0)].images
      return imagenes = imagenes[Math.floor(Math.random()*(imagenes.length)+0)].video_img
    }
  },
  computed: {
    ...mapState(['request','serverUrl'])
  }
}
</script>

<style lang="scss" scope>
  .listing-wrapper{
    .listing-item{
      overflow: hidden;
      .figure{
        width: 100%;
      }
      .listing-meta-cat{
        display: flex;
        a{
          margin: 0 3px;
        }
      }
      .tag-combo{
        position: absolute;
        z-index: 2;
        transform: rotate(-45deg);
        padding: 5px 50px;
        top: 2px;
        left: -50px;
        color: white;
        height: 80px;
      }
    }
  }
</style>