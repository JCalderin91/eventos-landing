<template>
  <div id="info-card" class="card mb-3">
    <div class="contact-info">
      <Map :lat="provider.latitud" :lng="provider.longitud" />
      <div class="item">
        <span class="fa fa-map"></span>
        <p>{{provider.direccion_domicilio}} - {{provider.zona}}</p>
      </div>
      <div class="item" v-if="provider.detail_provider.telefono_principal">
        <span class="fa fa-phone"></span>
        <p> {{provider.detail_provider.telefono_principal}}</p>
      </div>
      <div class="item">
        <span class="fa fa-link"></span>
        <p>https://burgerandlobster.com</p>
      </div>

      <template v-if="schedule">          
        <div class="item" v-for="(schedule, key, index) in schedule" :key="index">
          <span class="fa fa-calendar"></span>
          <p>
            <span v-for="(schedu, k, index) in schedule" :key="index">
              <span class="pr-1" v-for="(s, key, index) in schedu" :key="index">{{days[s.day_of_week]}}</span>
              <p>{{schedu[0].open}} - {{schedu[0].close}}</p>
            </span>
          </p>
        </div>
      </template>
          
      <template v-else>
        <div class="item" v-for="(schedule, key, index) in provider.p_schedule" :key="index">
          <span class="fa fa-calendar"></span>
          <p>
            <span v-for="(schedu, k, index) in schedule" :key="index">
              <span class="pr-1" v-for="(s, key, index) in schedu" :key="index">{{days[s.day_of_week]}}</span>
              <p>{{schedu[0].open}} - {{schedu[0].close}}</p>
            </span>
          </p>
        </div>
      </template>

      <h6 v-if="provider.is_working" class="text-success">Abierto</h6>
      <h6 v-else class="text-danger">Cerrado</h6>
    </div>    
  </div>
</template>

<script>
import Map from '@/components/Map'
export default {
    components: {
        Map
    },
    props: {
        provider: {
            type: Object,
            required: true
        },
        schedule: {
            type: Array,
        },
    },
    data: () => ({
        days: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
    }),    
}
</script>


<style lang="scss" scope>
  #info-card{
    .item{
      display: flex;
      padding: 10px;
      span.fa{
        padding: 5px 15px 5px 0px;
      }
      span.day{
        padding: 0 !important;
      }
 
    }
    .featured-open{
      margin-bottom: 5px;
      text-transform: uppercase;
    }
  }
</style>