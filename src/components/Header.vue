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
                        Support@designsvilla.com</li>
                      <li class="toolbar-contact"><i class="fa fa-phone"></i> +92 123 456 7890
                      </li>

                    </ul>
                  </div>
                  <div class="social-content">
                    <ul class="social-links">
                      <li><a class="linkedin" href="#" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                      <li><a class="twitter" href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
                      <li><a class="facebook" href="#" target="_blank"><i class="fa fa-facebook"></i></a></li>
                      <li><a class="youtube" href="#" target="_blank"><i class="fa fa-instagram"></i></a></li>
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
          <nav class="wsmenu slideLeft clearfix">
            <div class="logo pull-left">
              <router-link to="/" title="Responsive Slide Menus"><img src="images/logo.png" alt="" /></router-link>
            </div>
            <ul class="mobile-sub wsmenu-list pull-right">
              <li><a href="index.html" class="">Quienes somos</a>
                <ul class="wsmenu-submenu">
                  <li><a href="index.html">Home 1</a></li>
                  <li><a href="index-2.html">Home 2</a></li>
                  <li><a href="index-3.html">Home 3</a></li>
                  <li><a href="index-4.html">Home 4</a></li>
                </ul>
              </li>
              <li><a href="pricing.html" class="">condiciones legales</a></li>
              <li><a href="category.html">politicas</a></li>
              <li><a href="listing-archive.html">registrarse</a></li>
              <!-- <li><a href="#">pages</a>
                <ul class="wsmenu-submenu">
                  <li><a href="about.html">About</a></li>
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="single.html">Blog Single</a></li>
                  <li><a href="single-listing.html">listing Single</a></li>
                  <li><a href="404.html">Error 404</a></li>

                </ul>
              </li> -->
              <li><a class="toolbar-new-listing" href="#"> Acceder</a></li>
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
</style>