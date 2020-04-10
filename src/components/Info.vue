<template>
  <div v-if="haveNetWorks" id="info-card" class="card mb-3">
    <div class="contact-info">
      <a v-if="provider.detail_provider.social_youtube" :href="provider.detail_provider.social_youtube" class="item">
        <span class="fa fa-youtube"></span>
        <p>Yotube</p>
      </a>
      <a v-if="provider.detail_provider.social_linkedin" :href="provider.detail_provider.social_linkedin" class="item">
        <span class="fa fa-linkedin"></span>
        <p>LinkedIn</p>
      </a>

      <a v-if="provider.detail_provider.social_instagram" :href="provider.detail_provider.social_instagram" class="item">
        <span class="fa fa-instagram"></span>
        <p>Instagram</p>
      </a>

      <a v-if="provider.detail_provider.social_twitter" :href="provider.detail_provider.social_twitter" class="item">
        <span class="fa fa-twitter"></span>
        <p>Twitter</p>
      </a>
    </div>    
  </div>
</template>

<script>
export default {
  props: {
    provider: {
      type: Object,
      required: true
    }
  },
  computed:{
    haveNetWorks(){
      if(this.provider.detail_provider.social_instagram || this.provider.detail_provider.social_youtube || this.provider.detail_provider.social_linkedin || this.provider.detail_provider.social_twitter){
        return true
      }else{
        return false
      }
    }
  }
}
</script>


<style lang="scss" scope>
  #info-card{
    .item{
      display: flex;
      padding: 10px;
      span{
        padding: 5px 15px 5px 0px;
      }
 
    }
    .featured-open{
      margin-bottom: 5px;
      text-transform: uppercase;
    }
  }
</style>