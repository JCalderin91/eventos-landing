<template>
  <div>
    <hooper v-if="typeProfile != 1 && !isLoading" ref="carousel" :settings="hooperSettings">
      <slide v-for="image in imagenes" :key="image.id" :index="image.id">
        <img class="imagen-slider" :src="`${serverUrl}public/img/${image.video_img}`" alt="feature item" />
      </slide>
    </hooper>
    <template v-if="!isLoading">
      <section class="top-bar bgwhite">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <h4 class="text-left">{{ !isCombo ? service.nombre_servicio : service.nombre_combo_servicio }} 
                <span class="text-success">
                  {{ !isCombo ? service.monto_servicio : service.monto_combo }} $
                </span>
              </h4>
              <p>{{capacidad}}</p>
            </div>
            <div class="col-sm-6 actions mt-3 mt-sm-0">
              <div class="btn btn-danger float-right">Solicitar Presupuesto <i class="fa fa-file"></i></div>
              <div class="btn btn-success mr-2 float-right">8.0 <i class="fa fa-trophy"></i></div>
            </div>
          </div>
        </div>
      </section>
      <div class="container service-body">
        <div class="row">
          <div :class="{'order-2' : typeProfile == 2}" class="col-md-8">

            <hooper v-if="typeProfile == 1" ref="carousel" :settings="hooperSettings">
              <slide v-for="image in imagenes" :key="image.id" :index="image.id">
                <img class="imagen-slider" :src="`${serverUrl}public/img/${image.video_img}`" alt="feature item" />
              </slide>
            </hooper>

            <div class="card mb-3">
              <p class="parraf">{{ !isCombo ? service.descripcion_servicio : service.descripcion_combo}}</p>
              <hr>
              <div class="service-categories">
                <div class="badge badge-info mr-2" v-for="i in Math.floor(Math.random()*(5-1)+1)" :key="i">
                  <i class="fa fa-plus"></i>
                  Detalle {{i}}
                </div>
              </div>
            </div>
            
            <div v-if="isCombo" class="card">
              <h4 class="mb-3">Servicios del paquete</h4>
              <Mini-service 
              v-for="(service, index) in service.details" :key="index"
              :service="service" />
            </div>

            <br>
            <div class="card">
              <Review-form />
            </div>
            <br>
            <div class="card">
              <h5>12 Comentarios</h5>
              <hr>
              <Review v-for="i in 1" :key="i" />
            </div>
          </div>
          <div :class="{'order-1' : typeProfile == 2}" class="col-md-4" v-if="!isLoading">
            <Info-partial :schedule="service.schedule" :provider="service.provider" />
            <Profile-partial 
              :servicesCount="service.provider.service_client_count" 
              :combosCount="service.provider.combos_count" 
              :provider="service.provider" />
          </div>
        </div>
      </div>
    </template>
    <!-- <pre>{{service}}</pre> -->
  </div>
</template>

<script>
import ReviewForm from '@/components/ReviewForm'
import Review from '@/components/Review'
import MiniService from '@/components/MiniService'
import ProfilePartial from '@/components/ProfilePartial'
import InfoPartial from '@/components/InfoPartial'
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
import {mapActions, mapState} from 'vuex'
export default {
  components: {ReviewForm, Review, ProfilePartial, InfoPartial, MiniService, Hooper, Slide},
  data: () => ({
    isLoading: true,
    service: {},
    isCombo: false,
    typeProfile: 0,
    hooperSettings: {
      itemsToShow: 1,
      infiniteScroll: true,
      centerMode: true,
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
  }),
  mounted(){  
    if(this.$route.name === 'combo'){
      this.comboShow(this.$route.params.id)
      this.isCombo = true
    }else{
      this.serviceShow(this.$route.params.id)
    }

  },
  methods:{
    ...mapActions(['getService','getCombo']),
    serviceShow(id){
      this.getService(id)
        .then( res => {
          this.service = res
          this.typeProfile = res.provider.detail_provider.profile_type_id
          this.isLoading = false
        })
        .catch( err => {
          if(err.response.status === 401){
            this.$router.push({name:'unauthorized'})
          }
          this.isLoading = false
        })
    },
    comboShow(id){
      this.getCombo(id)
        .then( res => {
          this.service = res
          this.isLoading = false
        })
        .catch( err => {
          if(err.response.status === 401){
            this.$router.push({name:'unauthorized'})
          }
          this.isLoading = false
        })
    },
  },
  computed: {
    ...mapState(['base','serverUrl']),
    capacidad(){
      if(this.service.cantidad_persona > 0)
        return `Capacidad de ${this.service.cantidad_persona} ${ this.service.cantidad_persona>1 ? 'personas' : 'persona'}`      
      return ''
    },
    imagenes(){ 
      if(!this.service)  return []
      if(this.service.images)
        return this.service.images
      return this.service.details[Math.floor(Math.random()*(this.service.details.length)+0)].images
    }
  },
 
}
</script>

<style lang="scss" scope>
.imagen-slider{
  width: 100%;
}
  .top-bar {
    padding: 20px 0;
  } 

  .service-body {
    margin-top: 20px;
    padding-top: 15px;
    .card{
      background-color: white;
      padding: 20px;
    }
    .parraf {
      text-align: left;
      margin-bottom: 20px;
    }
  }
</style>