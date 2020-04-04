<template>
  <div>
    <section class="top-bar bgwhite">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h4 class="text-left">{{ !isCombo ? service.nombre_servicio : service.nombre_combo_servicio }} <span class="text-success">${{service.monto_servicio}}</span></h4>
          </div>
          <div class="col-sm-6 actions">
            <div class="btn btn-success mr-2">8.0 <i class="fa fa-trophy"></i></div>
            <div class="btn btn-danger">Solicitar Presupuesto <i class="fa fa-file"></i></div>
          </div>
        </div>
      </div>
    </section>
    <div class="container service-body">
      <div class="row">
        <div class="col-md-8">
          <div class="card">
            <p class="parraf">{{ !isCombo ? service.descripcion_servicio : service.descripcion_combo}}</p>

            <div class="service-categories row">
              <div v-for="i in 6" :key="i" class="col-sm-4">
                <p>
                  <i class="fa fa-plus"></i>
                  Categoria {{i}}
                </p>
              </div>
            </div>
          </div>
          <br>
          <div class="card">
            <Review-form/>
          </div>
          <br>
          <div class="card">
            <h5>12 Comentarios</h5>
            <hr>
            <Review v-for="i in 3" :key="i"/>
          </div>
        </div>
        <div v-if="!isLoading && !isCombo" class="col-md-4">
          <Info-partial :provider="service.provider"/>
          <Profile-partial :provider="service.provider"/>
        </div>
      </div>
    </div>
    <!-- <pre>{{service}}</pre> -->
  </div>
</template>
<script>
import ReviewForm from '@/components/ReviewForm'
import Review from '@/components/Review'
import ProfilePartial from '@/components/ProfilePartial'
import InfoPartial from '@/components/InfoPartial'
import {mapActions} from 'vuex'
export default {
  components: {ReviewForm, Review, ProfilePartial, InfoPartial},
  data: () => ({
    isLoading: true,
    service: {},
    isCombo: false
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
        .then( res => this.service = res)
        .catch( err => console.log(err) )
        .finally( () => this.isLoading = false)
    },
    comboShow(id){
      this.getCombo(id)
        .then( res => this.service = res)
        .catch( err => console.log(err) )
        .finally( () => this.isLoading = false)
    },
  }
}
</script>

<style lang="scss" scope>
  .top-bar {
    padding: 20px 0;
  }

  .actions {
    display: flex;
    justify-content: flex-end;

    div {
      padding: 10px;
      border-radius: 3px;
      color: white;
    }
    .rating {
      background-color: #16e53e;
      margin-right: 10px;
    }
    .reserve {
      background-color: #ff3030;
    }
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