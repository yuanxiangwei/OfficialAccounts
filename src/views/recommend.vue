<template>
	<div>
		<div v-if="status==='init'"></div>
		<div v-else-if="!status">
			<page-title title="申请成为推荐人" subTitle="领取专属二维码，好友通过扫码之间关注我们"></page-title>
			<van-form @submit="onSubmit">
				<van-field v-model="model.name" name="name" label="姓名" placeholder="请输入姓名" />
				<van-field v-model="model.phone" label="手机号" type="tel" placeholder="请输入手机号" />
				<div style="margin: 16px;">
					<van-button round block type="primary" native-type="submit">立即申请</van-button>
				</div>
			</van-form>
		</div>
		<div class="QR-box" v-else>
			<p>我的推荐码</p>
			<img :src="url" alt="" />
		</div>

	</div>
</template>

<script>
	import PageTitle from './title.vue'
	import axios from 'axios'
	import config from '../config'
	import { Notify } from 'vant';
	export default {
		name: '',
		components: {
			PageTitle
		},
		data() {
			return {
				status: 'init',
				model: {
					openId: localStorage.getItem('openID'),
					name: '',
					phone: ''
				},

				url: '',

			}
		},
		created() {
			this.queryStatus()
		},
		methods: {
			verify() {
				if(this.model.name == '') {
					Notify('请输入姓名')
					return false
				}
				if(this.model.phone == '' || !/^[1][0-9]{10}$/.test(this.model.phone)) {
					Notify('请输入手机号')
					return false
				}
				return true
			},
			onSubmit() {
				if(this.verify()) {
					axios.post(`${config.baseUrl}/do_save_customers`, this.model).then(res => {
							this.getTicket()
							Notify({
								type: 'success',
								message: '申请成功'
							});
						})
						.catch(err => {
							Notify('获取信息失败');
						})
				}
			},
			queryStatus() {
				axios.get(config.baseUrl + "/" + localStorage.getItem('openID') + "/ajax_search_massage_by_id")
					.then(res => {
						this.status = res.data
						if(this.status) this.getTicket()

					})
					.catch(err => {
						Notify('获取信息失败');
					})
			},
			getTicket() {
				axios.get(`${config.baseUrl}/${localStorage.getItem('openID')}/create_ewm`)
					.then(res => {
						this.status = true
						this.url = 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=' + res.data
					})
					.catch(err => {
						Notify('二维码获取失败');
					})
			},

		},

	}
</script>

<style scoped>
	.QR-box {
		text-align: center;
	}
	
	.QR-box p {
		font-size: .6rem;
		line-height: 2.8rem;
		color: #07c160;
	}
	
	.QR-box img {
		width: 80%;
	}
</style>