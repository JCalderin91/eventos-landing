<template>
  <div class="review">
    <h5 class="title">Escriba su comentario</h5>
    <hr>
    <div class="row">
      <div class="col-sm-3">
        <img class="review-photo" src="images/listings/370x300/05.jpg" alt="feature item" />
      </div>
      <div class="col-sm-9">
        <textarea class="input-field" placeholder="MESSAGE" name="message"></textarea>
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