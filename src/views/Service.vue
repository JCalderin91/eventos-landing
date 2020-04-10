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
              <h4 class="text-left">{{ !isCombo ? service.nombre_servicio : service.nombre_combo_servicio }} <span
                  class="text-success">${{service.monto_servicio}}</span></h4>
              <p>{{capacidad}}</p>
            </div>
            <div class="col-sm-6 actions">
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
              <slide v-for="indx in 3" :key="indx" :index="indx">
                <img class="imagen-slider" :src="`${base}/images/listings/370x300/0${indx}.jpg`" alt="feature item" />
              </slide>
            </hooper>

            <div class="card">
              <p class="parraf">{{ !isCombo ? service.descripcion_servicio : service.descripcion_combo}}</p>
              <hr>
              <div class="service-categories row">
                <div v-for="i in 5" :key="i" class="col-sm-4">
                  <p>
                    <i class="fa fa-plus"></i>
                    Detalle {{i}}
                  </p>
                </div>
              </div>
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
            <Info-partial :provider="service.provider" />
            <Profile-partial :provider="service.provider" />
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
import ProfilePartial from '@/components/ProfilePartial'
import InfoPartial from '@/components/InfoPartial'
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
import {mapActions, mapState} from 'vuex'
export default {
  components: {ReviewForm, Review, ProfilePartial, InfoPartial, Hooper, Slide},
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