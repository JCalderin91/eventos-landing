<template>
  <!--================================ FOOTER AREA ==========================================-->

  <footer class="footer style-1 padding-top-70 bg222">
    <div class="container">
      <div class="footer-main padding-bottom-10">
        <div class="row">
          <div class="col-md-4 col-sm-4 col-xs-12 margin-bottom-30">
            <div class="footer-widget-title">
              <h5>Nosotros</h5>
            </div>
            <div class="footer-logo">
              <a href="#"><img :src="base+'images/logo.png'" alt="footer logo"></a>
            </div>
            <div class="footer-intro">
              <p>Lorem ipsum dolor sit amet sectetuer
                esl adipiscing elit sed diam nonummy
                nibhi euismod tincidunt ut laoreet
                dolore amet magna.
              </p>
              <p><span>Dirección: </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae soluta molestiae illo.</p>
              <p><span>Teléfono: </span>+54 911 2722 5496</p>
              
            </div>
          </div>
          <div class="col-md-8 col-xs-12 margin-bottom-30">
            <div class="footer-widget-title">
              <h5>Nuestra ubicación</h5>
            </div>
            <div class="footer-recent-post-widget">
              <p>Insert map here</p>
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
            <ul>
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
export default {
  computed: {
    ...mapState(['base'])
  }
}
</script>

<style lang="scss" scope>
  .footer-bottom {
    padding-bottom: 15px;
  }

  .social-links {
    ul {
      li {
        display: inline-block;
        margin: 0 5px;
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
      span {
        color: white;
        font-weight: bold;
      }
    }
  }
</style>