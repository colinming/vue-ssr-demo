<template>
	<div style="height: 100%">
		<div class="wrapper">
     	<header-view></header-view>
      	<transition name = "fade" mode = 'out-in'>
        	<router-view class = "container"></router-view>
      	</transition>
    </div>
  	<footer-view></footer-view>
	</div>
</template>

<script>
import headerView from './headView.vue'
import footerView from './footView.vue'
export default {
    data(){
        return {}
    },
    components: {
        headerView,
        footerView
    }
}
</script>

<style scoped>
.wrapper{
    min-height: 100%;
  }
  .container{
    padding-bottom: 368px;
  }
</style>