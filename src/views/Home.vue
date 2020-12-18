<template>
	<div id="">
		<van-button type="primary">主要按钮</van-button>
		{{url}}
		{{code}}
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
 	url:"",
 	code:''
    }
  },
  created(){
  	this.url = window.location.href + window.location.url
  	this.code = window.location
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