<template>
  <!--================================HEADER==========================================-->
  <div class="header">
    <div class="header-inner">

      <div class="nav-wrapper">
        <!--main navigation-->
        <div class="container">
          <div class="top-toolbar">
            <!--header toolbar-->
            <div class="container">
              <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12 pull-right">
                  <div class="top-contact-info">
                    <ul>
                      <li class="toolbar-email"><i class="fa fa-envelope-o"></i>
                        info@eventosok.com</li>
                      <li class="toolbar-contact"><i class="fa fa-phone"></i> +54 911 2722 5496
                      </li>

                    </ul>
                  </div>
                  <div class="social-content">
                    <ul class="social-links">
                      <li><a class="linkedin" href="http://www.linkedin.com/company/EventosOKcom" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                      <li><a class="twitter" href="https://twitter.com/EVENTOSOKcom" target="_blank"><i class="fa fa-twitter"></i></a></li>
                      <li><a class="facebook" href="https://www.facebook.com/eventosokcom" target="_blank"><i class="fa fa-facebook"></i></a></li>
                      <li><a class="youtube" href="https://www.instagram.com/eventosokcom/" target="_blank"><i class="fa fa-instagram"></i></a></li>
                      <!--<li><button class = "login" data-toggle = "modal" data-target = "#login">login</button></li>
										<li><button class = "register" data-toggle = "modal" data-target = "#register">register</button></li>-->
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--header toolbar end-->
          <!--Main Menu HTML Code-->
          <nav class="wsmenu slideLeft clearfix" :class="{'menuopen':menuopen}">
            <div class="logo pull-left">
              <router-link to="/" class="logo-content" title="Responsive Slide Menus">
                <img :src="base+'/images/logo.png'" alt="" /> <span>ventosOK</span>
              </router-link>
            </div>
            <ul class="mobile-sub wsmenu-list pull-right">
              <li @click="toggleMenu(false)"><router-link tag="a" :to="{name:'home'}" class="">Inicio</router-link></li>
              <li @click="toggleMenu(false)"><router-link tag="a" :to="{name:'about-us'}" class="">Quienes somos</router-link></li>
              <li @click="toggleMenu(false)"><router-link tag="a" :to="{name: 'legals'}" class="">condiciones legales</router-link></li>
              <li @click="toggleMenu(false)"><router-link tag="a" :to="{name: 'politics'}">politicas</router-link></li>
              <li><a @click.prevent="toggleModal('user-register')">registrase</a></li>
              <!-- <li><a href="#">pages</a>
                <ul class="wsmenu-submenu">
                  <li><a href="about.html">About</a></li>
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="single.html">Blog Single</a></li>
                  <li><a href="single-listing.html">listing Single</a></li>
                  <li><a href="404.html">Error 404</a></li>

                </ul>
              </li> -->
              <li><a @click.prevent="toggleModal('login-form')" class="toolbar-new-listing"> Acceder</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <!--main navigation end-->
    </div>
  </div><!-- header end -->
</template>

<style lang="scss" scope>
  .top-contact-info{
    li{
      color: white
    }
  }
  .wsmenu .logo{
    .logo-content{
      display: flex;
      align-items:center;
      span{
        font-size: 26px;
        color: white;
      }
    }
    img{
      height: 55px;
    }
  }
</style>

<script>
import {mapMutations, mapState} from 'vuex';
export default {
  methods:{
    ...mapMutations(['toggleModal','toggleMenu'])
  },
  computed: {
    ...mapState(['base','menuopen'])
  }
}
</script>
