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
    <router-view/>
    <Suscription/>
    <Footer/>
  
  </div>
</template>

<script>
import Navbar from '@/components/Nav'
import Header from '@/components/Header'

import Footer from '@/components/Footer'
import Suscription from '@/components/Suscription'

export default {
  components: {Navbar, Header, Suscription, Footer }
}
</script>

<style lang="scss">
 
</style>