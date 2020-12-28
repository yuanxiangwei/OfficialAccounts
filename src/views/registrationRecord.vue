<template>
	<div>
		<van-list v-model="loading" style="min-height: 5rem;" :finished="finished">
			<van-cell v-for="(item,index) in list" :key="index">
				<div class="booking-item">
					<div><span class="label">病历号：</span>{{item.kkBlh}}</div>
					<div><span class="label">商品名称：</span>{{item.goodsName}}</div>
					<div><span class="label">接种数：</span>{{item.execNum}}</div>
					<div><span class="label">接种次数：</span>{{item.kkCs}}</div>
					<div><span class="label">下一针：</span>{{item.nextz}}</div>
					<div><span class="label">开方数：</span>{{item.num}}</div>
					<div><span class="label">规格：</span>{{item.goodsSpec}}</div>
					<div><span class="label">商品编号：</span>{{item.goodsCode}}</div>
					<div><span class="label">产地：</span>{{item.manufacturer}}</div>

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
				axios.get(`${config.baseUrl}/${localStorage.getItem('openID')}/get_kk_jzjl_by_openid`).then(res => {
						this.list = res.data
					})
					.catch(err => {
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
	.booking-item {
		padding: .5rem 0 .2rem;
	}
	
	.booking-item div {
		line-height: 2;
		display: flex;
	}
	
	.booking-item .booking-item-last {
		display: flex;
		justify-content: space-between;
	}
	
	.booking-item div span.label {
		font-size: .3rem;
		font-weight: 600;
		display: inline-block;
		width: 1.6rem;
		text-align: right;
		vertical-align: center;
		flex-shrink: 0;
	}
	
	.booking-item div {
		font-size: .26rem;
		display: flex;
		align-items: baseline;
	}
	
	.booking-item div .name {
		color: #8d2ede;
		font-size: .36rem;
	}
</style>