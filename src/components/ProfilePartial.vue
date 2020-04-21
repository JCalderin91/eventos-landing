<template> 
  <div :class="{'card': !dark}" class="user-section mb-2">
    <div class="profile-photo">
      <img :src="serverUrl+'public/img/'+provider.detail_provider.logo_empresa" alt="feature item">
    </div>
    <div :class="{'dark' : dark}" class="title">
      <router-link :to="{name:'profile', params: {id: provider.id}}" class="name">{{provider.nombre_fantasia}}</router-link>
      <div v-if="!dark" class="location">{{provider.location.name}}</div>
    </div>
    <div class="row">
      <div class="col-xs-6 indicator">
        <span v-if="!profile" :class="{'dark' : dark}">{{servicesCount}}</span>
        <span v-else :class="{'dark' : dark}">{{provider.service_client.length}}</span>
        <p :class="{'dark' : dark}" class="text-uppercase">servicios</p>
      </div>
      <div class="col-xs-6 indicator">
        <span v-if="!profile" :class="{'dark' : dark}">{{combosCount}}</span>
        <span v-else :class="{'dark' : dark}">{{provider.combos.length}}</span>
        <p :class="{'dark' : dark}" class="text-uppercase">combos</p>
      </div>
      <!-- <div class="cindicator">
        <span :class="{'dark' : dark}">2</span>
        <p :class="{'dark' : dark}" class="text-uppercase">contratado</p>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    dark:{
      type: Boolean,
      default: false,
    },
    provider: {
      type: Object,
      required: true,
    },
    servicesCount: {
      default: false,
    },
    combosCount: {
      default: false,
    },
    profile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState(['base', 'serverUrl'])
  },
} 
</script>

<style lang="scss" scope>
.user-section {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.indicator {
  padding: 0 3px;
  text-align: center;
  p{
    margin-top: 3px;
  }
  p.dark,
  span.dark {
    color: white;
  }
}

.profile-photo {
  display: flex;
  justify-content: center;
  padding: 10px;

  img {
    border-radius: 50%;
    height: 130px;
    width: 130px;
    border: 5px solid white;
    background-color: white;
  }
}
.title {
  text-align: center;
  margin: 15px 0;
  .name{
    margin-bottom: 3px;
    font-size: 20px;
  }
  &.dark a{
    color: white
  }
}
</style>