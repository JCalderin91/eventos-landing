<template>
  <div>
    <!--================================responsive log and menu==========================================-->
		<div @click="toggleMenu()" class="wsmenucontent overlapblackbg" :class="{'menuopen': menuopen}"></div>
		<div class="wsmenuexpandermain slideRight">
			<a id="navToggle" @click="toggleMenu()" class="animated-arrow slideLeft" :class="{'menuopen': menuopen}"><span></span></a>
			<router-link :to="{name:'home'}" class="smallogo"><img :src="base+'/images/logo.png'" height="30" alt="" /></router-link>
		</div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
	data(){
		return {
			menu: false
		}
	},
	methods: {
		...mapMutations(['toggleMenu'])
	},
	computed: {
		...mapState(['base', 'menuopen'])
	}
}
</script>