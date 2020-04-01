<template>
  <div>
    <Header-section/>
    <Category/>
    <Listing/>
    <Call-to-action/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderSection from '@/components/HeaderSection'
import Category from '@/components/Category'
import Listing from '@/components/Listing'
import CallToAction from '@/components/CallToAction'


export default {
  name: 'Home',
  components: {
    HeaderSection, Category, Listing, CallToAction
  },
  
}
</script>
