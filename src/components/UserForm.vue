<template>
  <form @submit.prevent="submit()" class="card">
    <div class="card-title">
      <img :src="base+'/images/logo.png'" height="60" alt="" />
      <h5 class="text-center text">Registro de clientes</h5>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label>Nombres</label>
          <input v-model="credentials.nombre" required type="text" class="form-control">
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label>Apellidos</label>
          <input v-model="credentials.apellido" required type="text" class="form-control">
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label>Correo electronico</label>
          <input v-model="credentials.email" required type="email" class="form-control" aria-describedby="emailHelp">
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="exampleInputPassword1">Contraseña</label>
          <input :class="{'is-invalid': !passwordMach}" v-model="credentials.password" required type="password" class="form-control">
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="exampleInputPassword1">Confirmar contraseña</label>
          <input :class="{'is-invalid': !passwordMach}" v-model="credentials.verifyPassword" required type="password" class="form-control">
          <div class="invalid-feedback">Las contraseñas no coinciden</div>
        </div>
      </div>
    </div>
    <hr>
    <button class="btn btn-rounded bgyallow-1 text-white">Registrarse</button>
    <p class="mt-2"><a @click.prevent="toggleModalType('provider-register')" href="#">Registrarse como proveedor</a></p>
  </form>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
  data: () => ({
    isLoading: false,
    credentials: {
      password: '',
      verifyPassword: ''
    }
  }),
  methods:{
    ...mapMutations(['toggleModalType','toggleModal']),
    ...mapActions(['registerClient']),
    submit(){
      this.registerClient(this.credentials)
        .then( res => {
          this.credentials = {
            password: '',
            verifyPassword: ''
          }
          this.toggleModal()
          this.$notify({
            group: 'foo',
            type: 'success',
            title: 'Exito',
            text: 'Ha ingresado al sistema',
          });
        })
        
    }
  },
  computed: {
    ...mapState(['base']),
    passwordMach(){
      if(this.credentials.password.length > 0 && this.credentials.verifyPassword.length > 0){
        return this.credentials.password !== this.credentials.verifyPassword ? false : true
      }
      return true
    }
  },
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