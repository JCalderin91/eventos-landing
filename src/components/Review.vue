<template>
  <div class="review card mb-2">
    <div class="row">
      <div class="col-sm-3 review-content-photo">
        <img class="review-photo" :src="base+'/images/listings/370x300/05.jpg'" alt="feature item" />
        <h6>Petronila Mata</h6>
      </div>
      <div class="col-sm-9 ">
        <div class="review-body">
          <div>
            <h6>the best noddle of the Macanao</h6>
            <i v-for="i in 5" :key="i" class="fa fa-star"></i>
            Hace 2 dias
          </div>
          <div class="button">
            <div class="btn btn-success">8.0 <i class="fa fa-trophy"></i></div>
          </div>
        </div>
        <br>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, dignissimos quisquam doloremque culpa,
          dolorem praesentium nulla inventore est, animi ullam odio veniam aliquid suscipit commodi.</p>
        <br>
        <div class="row">
          <div v-for="i in 3" :key="i" class="col-sm-4">
            <img :src="base+'/images/listings/370x300/05.jpg'" alt="feature item" />
          </div>
        </div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['base'])
  }
}
</script>

<style lang="scss" scope>
  .review{
    .review-content-photo{
      display: flex;
      flex-direction: column;
      align-items: center;
      h6{
        margin-top: 15px;
      }
    }
    .review-photo{
      border-radius: 50%;
      height: 100px;
      width: 100px;
    }
    textarea{
      width: 100%;
      height: 100px;
    }
    .review-body{
      display: flex;
      justify-content: space-between;
      h6{
        text-align: left;
        margin-bottom: 10px;
      }
    }
  }
</style>