<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->
  <!--================================HEADER==========================================-->
  <div class="theme-wrap clearfix">
    <Navbar/>
    <Header/>
    <transition name="fade" mode="out-in">
      <router-view class="body-page"/>
    </transition>
    <Suscription/>
    <Footer/>
    <Modal/>
  
  </div>
</template>

<script>
import Navbar from '@/components/Nav'
import Header from '@/components/Header'

import Footer from '@/components/Footer'
import Suscription from '@/components/Suscription'
import Modal from '@/components/Modal'

export default {
  components: {Navbar, Header, Suscription, Footer, Modal },
}
</script>

<style lang="scss">

  @media only screen and (max-width: 1200px){
    .body-page{margin-top: 50px;}
  }

</style>