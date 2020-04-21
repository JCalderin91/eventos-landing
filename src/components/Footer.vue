<template>
  <!--================================ FOOTER AREA ==========================================-->

  <footer class="footer style-1 padding-top-70 bg222">
    <div class="container">
      <div class="footer-main padding-bottom-10">
        <div class="row">
          <div class="col-md-4 col-12 margin-bottom-30">
            <div class="footer-widget-title">
              <h5>Nosotros</h5>
            </div>
            <div class="footer-logo d-flex justify-content-center justify-content-md-start">
              <router-link :to="{name:'home'}"><img :src="base+'/images/logo.png'" alt="footer logo"></router-link>
            </div>
            <div class="footer-intro px-5 px-md-0">
              <p class="text-center text-md-left mb-md-4"><span>EventosOK</span></p>
              <p class="text-center text-md-left">
                <span class="mr-1">Dirección:</span>
                <span class="op-7">Parque Comercial Avellaneda, Local E7, B1875, Avellaneda, Buenos Aires.</span>
              </p>
              <p class="text-center text-md-left">
                <span class="mr-1">Teléfono:</span>
                <span class="op-7"> +54 911 2722 5496</span>
              </p>              
            </div>
          </div>
          <div class="col-md-8 col-12 margin-bottom-30">
            <div class="footer-widget-title">
              <h5>Nuestra ubicación</h5>
            </div>
            <div class="footer-recent-post-widget">
              <div class="map-container">
                <Map toltip="EventosOk" lat="-34.6768592" lng="-58.3347693" />
              </div>
            </div>
          </div>
          <!-- <div class="col-md-4 col-sm-4 col-xs-12 margin-bottom-30">
            <div class="footer-widget-title">
              <h5>Flikr Photos</h5>
            </div>
            <div class="footer-flikr-widget">
              <ul class="flikr-list clearfix">
                <li><a href="#"><img src="images/news/flikr/01.jpg" alt="flikr photo"></a></li>
                <li><a href="#"><img src="images/news/flikr/02.jpg" alt="flikr photo"></a></li>
                <li><a href="#"><img src="images/news/flikr/03.jpg" alt="flikr photo"></a></li>
                <li><a href="#"><img src="images/news/flikr/04.jpg" alt="flikr photo"></a></li>
                <li><a href="#"><img src="images/news/flikr/05.jpg" alt="flikr photo"></a></li>
                <li><a href="#"><img src="images/news/flikr/06.jpg" alt="flikr photo"></a></li>
              </ul>
            </div>
          </div> -->
        </div>
      </div>
    </div><!-- .container end -->
    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-12">
            <div class="footer-copyright">
              <p>EventosOK &copy; 2020 Desarrollado por Boomideas.pro</p>
            </div>
          </div>
          <div class="col-md-6 col-12 social-links d-flex justify-content-center justify-content-md-end">
            <ul class="social-icons">
              <li class="item">
                <a class="" href="http://www.linkedin.com/company/EventosOKcom"><i class="fa fa-linkedin-square"></i></a>
              </li><!-- .ITEM -->
              <li class="item">
                <a class="" href="https://www.facebook.com/eventosokcom"><i class="fa fa-facebook-square"></i></a>
              </li><!-- .ITEM -->
              <li class="item">
                <a class="" href="https://twitter.com/EVENTOSOKcom"><i class="fa fa-twitter-square"></i></a>
              </li><!-- .ITEM -->
              <li class="item">
                <a class="" href="https://www.instagram.com/eventosokcom/"><i class="fa fa-instagram"></i></a>
              </li><!-- .ITEM -->                  
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>

import { mapState } from 'vuex'

import Map from '@/components/Map'

export default {
  components: {Map},
  computed: {
    ...mapState(['base'])
  },
}
</script>

<style lang="scss" scope>
  .footer-bottom {
    padding-bottom: 15px;
  }
  .op-7{
    opacity: .7;
  }

  .social-links {
    ul {
      li {
        display: inline-block;
        margin: 0 10px;
        a{
          font-size: 18px;
        }
        a:not(.nohover):hover i {
          color: black;
        }
      }
    }
  }
  .footer-logo img{
    height: 100px;
  }

  .footer-intro {
    p {
      max-width: 100% !important;
      span {
        color: white;
        font-weight: bold;
      }
    }
  }
  .map-container{
    height: 300px;
  }
</style>