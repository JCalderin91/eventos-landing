<template>
  <div class="card">
    <div class="card-title">
      <h4 class="text-center text-color">Registrarse</h4>
      <p class="text-center">Registro de proveedores</p>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label>Nombres</label>
          <input type="text" class="form-control">
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label>Apellidos</label>
          <input type="text" class="form-control">
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <label>Correo electronico</label>
          <input type="email" class="form-control" aria-describedby="emailHelp">
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="exampleInputPassword1">Teléfono</label>
          <input type="text" class="form-control">
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="exampleInputPassword1">Servicio</label>
          <select class="form-control">
            <option  value="">Opcion 1</option>
          </select>
        </div>
      </div>
    </div>
    <hr>
    <button class="btn btn-rounded bgyallow-1 text-white">Registrarse</button>
    <p class="mt-2"><a  @click.prevent="toggleModalType('user-register')" href="#">Registrarse como cliente</a></p>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods:{
    ...mapMutations(['toggleModalType']),
  },
}
</script>