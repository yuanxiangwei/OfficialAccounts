<template>
	<div id="">
		<van-button type="primary">主要按钮</van-button>
		{{url}}
	</div>

</template>

<script>
	import Vue from 'vue';
import { Button } from 'vant';
Vue.use(Button)
export default {
  name: '',
  data () {
    return {
 	url:""
    }
  },
  create(){
  	this.url = window.location.href + window.location.url
  },
  methods:{
	a(){
		
	}
  },
  mounted(){

  }
}
</script>

<style scoped>

</style>