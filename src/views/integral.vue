<template>
<div class="integral-box">
	<div class="integral-label">
	
			我的积分:
	</div>

<div class="integral-content">
		<div>
			{{value}}
		</div>
		分
</div>
</div>

</template>

<script>
		import axios from 'axios'
	import config from '../config'
export default {
  name: '',
  data () {
    return {
 			value:''
    }
  },
  methods:{
		getData(){
				axios.get(`${config.baseUrl}/${localStorage.getItem('openID')}/get_point_by_openid`).then(res=>{
				this.value =res.data
			}).catch(err=>{
				Notify('获取病历列表失败');
			})
		}
  },
  created(){
		this.getData()
  }
}
</script>

<style scoped>
.integral-box{
	margin-top: 1.5rem;
	display: flex;
}
.integral-content{
	width: 70%;
	display: flex;
	align-items: flex-end;
	font-size: .28rem;
}
.integral-label{
	width: 30%;
	text-align: right;
	font-size: .36rem;
	padding-right: .3rem;
}
.integral-content div{
	min-width: 2.8rem;
	padding: 0 .3rem;
	height:2.8rem;
	border:1px solid #ddd;
	line-height: 2.8rem;
	font-size: 1rem;
	text-align: center;
}
</style>