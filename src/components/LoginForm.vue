<template>
  <div class="card">
    <div class="card-title">
      <h4 class="text-center">Iniciar sessión</h4>
    </div>
    <hr>
    <div class="form-group">
      <label for="exampleInputEmail1">Correo electronico</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <small v-if="false" id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Contaseña</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <hr>
    <button class="btn btn-rounded bgyallow-1">Ingresar</button>
    <p class="mt-2"><a href="#">¿Olvidó su contraseña?</a></p>
  </div>
</template>