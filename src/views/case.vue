<template>
	<div>
		<page-title title="关联病历号" subTitle="关联病历号之后，可以随时接收接种提醒，避免过号、误号等情况。"></page-title>
		<van-cell-group>
			<van-field v-model="value" label="病历号" placeholder="请输入病历号" />
		</van-cell-group>
		<van-button block type="primary" :disabled="disabled" class="mg20" @click="binding">立即绑定</van-button>
		<div class="img-box">
			<img :src="caseImg" />
		</div>
		<van-list v-model="loading" style="min-height: 5rem;" :finished="finished">
			<van-cell v-for="(item,index) in list" :key="index">
				<div class="booking-item">
					<div><span>病历号:{{item.kkBlh}}</span><span>绑定时间:{{item.dates+' '+item.onTime}}</span></div>

				</div>
			</van-cell>
		</van-list>
	</div>
</template>

<script>
	import PageTitle from './title.vue'
	import { Notify } from 'vant';
	import axios from 'axios'
	import config from '../config'
	export default {
		name: '',
		components: {
			PageTitle
		},
		data() {
			return {
				disabled: false,
				loading: false,
				finished: true,
				list: [],
				value: '',
				caseImg: require('../assets/case.png')
			}
		},
		methods: {
			binding() {
				if(!this.value || this.value.trim() == '') {
					Notify('请输入病历号');
					return false
				}
				this.disabled = true
				axios.post(`${config.baseUrl}/save_bd_bl`, {
					openidOwn: localStorage.getItem('openID'),
					kkBlh: this.value
				}).then(res => {
					this.getData()
					this.value = ''
					this.disabled = false
					Notify({
						type: 'success',
						message: '绑定成功'
					});
				}).catch(err => {
					this.disabled = false
					Notify('绑定失败');
				})
			},
			getData() {
				axios.get(`${config.baseUrl}/${localStorage.getItem('openID')}/get_kk_blb_by_openid`).then(res => {
					this.list = res.data
				}).catch(err => {
					Notify('获取病历列表失败');
				})
			}
		},
		mounted() {
			this.getData()
		}
	}
</script>

<style scoped>
	.mg20 {
		margin: .3rem auto .6rem;
		width: 90%;
	}
	
	.img-box {
		width: 100%;
		text-align: center;
		margin-bottom: .3rem;
	}
	
	img {
		width: 90%;
	}
	
	.booking-item div {
		font-size: .24rem;
		display: flex;
		justify-content: space-between;
	}
</style>