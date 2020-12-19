<template>
<div>
<van-image class="hospital-img" :src="url" />
<van-image class="hospital-img" :src="url1" />
</div>
</template>

<script>
	import axios from 'axios'
export default {
  name: '',
  data () {
    return {
 			url:'',
 			url1:require('./test.jpg')
    }
  },
  created(){
  	this.getQr()
  },
  methods:{
		getQr(){
		
			axios.get(`https://www.qugouzhigong.top/syx_fy_api_module/wx_server/create_ewm`)
				.then(res=>{
					this.url ='https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket='+res.data
				})
		}
  },

}
</script>

<style scoped>

</style>