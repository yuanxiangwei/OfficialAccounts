<template>
	<div>
		<van-list v-model="loading" style="min-height: 5rem;" :finished="finished">
			<van-cell v-for="(item,index) in list" :key="index">
				<div class="booking-item">
					<div><span >疫苗名称：</span><span class="name">{{item.goodsname}}</span></div>
					<div><span>交款日期：</span>{{item.dates}}</div>
					<div><span>当前排名：</span>{{item.sn}}</div>
					<!--<div class="booking-item-last">
						<p><span>状态：</span>{{item.isDone=='N'?'未完成':'已完成'}}</p>
						<p>{{item.kkYyDates}}  {{item.kkYyOnTime}}</p>
					</div>-->
				</div>
			</van-cell>
		</van-list>
	</div>
</template>

<script>
	import axios from 'axios'
	import config from '../config'
	export default {
		name: '',
		data() {
			return {
				list: [],
				loading: false,
				finished: true,

			}
		},
		methods: {
			onLoad() {
					axios.get(`${config.baseUrl}/${localStorage.getItem('openID')}/get_kk_yyue_by_openid`).then(res=>{
						this.list = res.data.reverse()
					})
					.catch(err=>{
						alert('获取失败')
					})
			}
		},
		created() {
			this.onLoad()
		}
	}
</script>

<style scoped>
	.booking-item{
		padding: .5rem 0 .2rem;
	}
.booking-item div{
	line-height: 2;
	
}
.booking-item .booking-item-last{
	display: flex;
	justify-content: space-between;
}
.booking-item div span{
	font-size: .3rem;
	font-weight: 600;
}
.booking-item div .name{
	color: #8d2ede;
	font-size: .36rem;
}
</style>