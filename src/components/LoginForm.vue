<template>
  <form @submit.prevent="login()" class="card">
    <div class="card-title">
      <img :src="base+'/images/logo.png'" height="60" alt="" />
      <h5 class="text-center text">Iniciar sessión</h5>
    </div>
    <hr>
    <div class="form-group">
      <label for="exampleInputEmail1">Correo electronico</label>
      <input v-model="credentials.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <small v-if="false" id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Contaseña</label>
      <input v-model="credentials.password" type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <hr>
    <button type="submit" :disabled="isLoading" class="btn btn-rounded bgyallow-1">
      <span v-if="!isLoading">Ingresar</span>
      <i v-else class="fa fa-spinner spinner"></i>
    </button>
    <p class="mt-2"><a href="#">¿Olvidó su contraseña?</a></p>
  </form>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  data: () => ({
    credentials: {
      email: '',
      password: ''
    },
    isLoading: false,
  }),
  methods: {
    ...mapMutations(['login']),
    login(){
      this.isLoading = true
      this.login(this.credentials)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .finally( () => this.isLoading = false)
    }
  },
  computed: {
    ...mapState(['base'])
  }
}
</script>

<style lang="scss" scope>
  .card-title{
    display: flex;
    flex-direction: column;
    align-items: center;
    .text{
      margin-top: 10px;
    }
  }
</style>