<template>
  <div class="review">
    <h5 class="title">Escriba su comentario</h5>
    <hr>
    <div class="row">
      <div class="col-sm-3 user-review">
        <img class="review-photo" :src="base+'images/listings/370x300/05.jpg'" alt="feature item" />
        <h6 class="mt-2">Petronila mata</h6>
      </div>
      <div class="col-sm-9">
        <div class="raiting-stars d-flex">
          <a 
            @click.prevent="markStar(i)"
            :class="{'star-active' : check(i)}"
            v-for="i in 5"

            :key="i"
            href="#">
              <i class="fa fa-star"></i>
          </a>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Mensaje</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="form-group d-flex justify-content-end">
          <button class="btn btn-success">Enviar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () =>({
    indxStar: 0
  }),
  methods: {
    markStar(indx){
      if(indx==this.indxStar) this.indxStar = 0
      else this.indxStar = indx
    },
    check(i){
      return i <= this.indxStar 
    }
  },
  watch: {
    indxStar(){
      this.check()
    }
  },
  computed: {
    ...mapState(['base'])
  }
}
</script>

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
    .user-review{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    textarea{
      width: 100%;
      height: 100px;
    }
    .raiting-stars a{
      margin: 0 2px;
      color: rgb(189, 189, 189);
      &:hover i{
        color: gold !important;
        transform: scale(1.3);
      }
    }
    .star-active i{
      color: gold;
    }
  }
</style>