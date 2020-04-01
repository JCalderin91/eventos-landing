<template>
  <div class="review">
    <h5 class="title">Escriba su comentario</h5>
    <hr>
    <div class="row">
      <div class="col-sm-3">
        <img class="review-photo" src="images/listings/370x300/05.jpg" alt="feature item" />
      </div>
      <div class="col-sm-9">
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Mensaje</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scope>
  .review{
    .title{
      text-align: left;
    }
    .review-photo{
      border-radius: 50%;
      height: 120px;
      width: 120px;
    }
    textarea{
      width: 100%;
      height: 100px;
    }
  }
</style>