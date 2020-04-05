<template>
  <form :disabled="isLoading" @submit.prevent="submit()" class="card">
    <div class="card-title">
      <img :src="base+'/images/logo.png'" height="60" alt="" />
      <h5 class="text-center text">Registro de proveedores</h5>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label>Nombres</label>
          <input v-model="credentials.name" required type="text" class="form-control">
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label>Apellidos</label>
          <input v-model="credentials.apellido" required type="text" class="form-control">
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <label>Correo electronico</label>
          <input v-model="credentials.email" required type="email" class="form-control" aria-describedby="emailHelp">
          <span v-if="errors.email" class="text-danger">{{errors.email[0]}}</span>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="exampleInputPassword1">Teléfono</label>
          <input v-model="credentials.telefono" required type="text" class="form-control">
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="exampleInputPassword1">Servicio</label>
          <select v-model="credentials.servicio" required class="form-control">
            <option value="1">Opcion 1</option>
            <option value="2">Opcion 2</option>
          </select>
        </div>
      </div>
    </div>
    <hr>
    <button class="btn btn-rounded bgyallow-1 text-white">
      <span v-if="!isLoading">Registrarse</span>
      <i v-else class="fa fa-spinner spinner"></i>
    </button>
    <p class="mt-2"><a  @click.prevent="toggleModalType('user-register')" href="#">Registrarse como cliente</a></p>
  </form>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
  data: () => ({
    isLoading: false,
    credentials: {},
    errors: {}
  }),
  
  methods:{
    ...mapMutations(['toggleModalType','toggleModal']),
    ...mapActions(['registerProvider']),
    submit(){
      this.isLoading = true
      this.errors = {}
      this.registerProvider(this.credentials)
        .then(() => {
          this.credentials = {}
          this.toggleModal()
          this.$notify({
            group: 'foo',
            type: 'success',
            title: 'Exito',
            text: 'Se le ha enviado un correo electronico',
          });
        })
        .catch(err => {
          this.errors = err.data.error
          this.$notify({
            group: 'foo',
            type: 'error',
            title: 'Advertencia',
            text: 'Ha ocurrido un error',
          });
        })
        .finally( () => this.isLoading = false)
    }
  },
  computed: {
    ...mapState(['base']),
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