<template>
	<div id="">
		<van-button type="primary">主要按钮</van-button>
		{{url}}
		<h1>{{user}}</h1>
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
 	code:'',
 	user
    }
  },
  created(){
  	this.url = window.location.href + window.location.url
  	this.code = window.location
  	this.user = Cookie.get('userInfo')
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