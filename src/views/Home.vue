<template>
	<div id="">1
		<van-button type="primary">主要按钮</van-button>
		{{url}}
		<h1>{{u}}</h1>
		<h2>{{user}}</h2>
		{{code}}
	</div>

</template>

<script>
	import Cookie from 'js-cookie'
	import Vue from 'vue';
import { Button } from 'vant';
Vue.use(Button)
export default {
  name: '',
  computed:{
  	u(){
  		return Cookie.get('userInfo')
  	}
  },
  data () {
    return {
 	url:"",
 	code:'',
 	user:''
    }
  },
  created(){
  	this.url = window.location.href + window.location.url
  	this.code = window.location
  	setTimeout(()=>{
  		  	this.user = Cookie.get('userInfo')
  	},5000)

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