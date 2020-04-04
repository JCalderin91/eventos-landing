<template> 
  <div :class="{'card': !dark}" class="user-section mb-2">
    <div class="profile-photo">
      <img :src="base+'/images/carousel/03.jpg'" alt="feature item">
    </div>
    <div :class="{'dark' : dark}" class="title">
      <router-link :to="{name:'profile', params: {id: provider.id}}" class="name">{{provider.nombre_fantasia}}</router-link>
      <div v-if="!dark" class="location">{{provider.location.name}}</div>
    </div>
    <div class="row">
      <div class="col-xs-4 indicator">
        <span :class="{'dark' : dark}">5</span>
        <p :class="{'dark' : dark}" class="text-uppercase">servicios</p>
      </div>
      <div class="col-xs-4 indicator">
        <span :class="{'dark' : dark}">6</span>
        <p :class="{'dark' : dark}" class="text-uppercase">seguidores</p>
      </div>
      <div class="col-xs-4 indicator">
        <span :class="{'dark' : dark}">2</span>
        <p :class="{'dark' : dark}" class="text-uppercase">contratado</p>
      </div>
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
    }
  },
  computed: {
    ...mapState(['base'])
  }
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
  }
}
.title {
  text-align: center;
  margin: 15px 0;
  .name{
    color: white;
    margin-bottom: 3px;
    font-size: 20px;
  }
  &.dark{
    color: white
  }
}
</style>