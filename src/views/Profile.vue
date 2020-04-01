<template>
  <div class="profile">
    <div class="header-profile">
      <img class="header-photo" src="images/carousel/03.jpg" alt="feature item">
      <div class="container">

        <div class="row">
          <div class="col-md-4 ">  
            <Profile-partial dark/>
          </div>
          <div class="col-md-6"></div>
          <div class="col-sm-12 side-section">
            <div class="actions">
              <div class="rating ml-3">8.0</div>
              <div class="reserve">Solicitar Presupuesto</div>
            </div>
          </div>
        </div>

 
      </div>
    </div>


    <div class="body-profile container">
      <div class="row">
        <div class="col-md-4">
          Mapa
        </div>
        <div class="col-md-8">
          <div class="section-items row">
            <div class="col-md-6" v-for="i in 6" :key="i">
              <Item />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Item from '@/components/Item'
  import ProfilePartial from '@/components/ProfilePartial'
  export default {
    components: {
      Item,
      ProfilePartial
    }
  }
</script>

<style lang="scss" scope>
  .header-profile {
    // height: 350px;
    position: relative;
    padding: 25px 0;
    @media only screen and (max-width: 992px){
      margin-top: 15px;
    }

    

    .side-section { 
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      @media only screen and (max-width: 992px){
        justify-content: center;
        .actions{
          margin-top: 15px;
        }
      }
    }

    .header-photo {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    

    

    
  }

  .body-profile {
    margin-top: 30px;

    .section-items {
      max-height: 800px;
      overflow-y: scroll;
    }
  }
</style>