<template>
	<div>
		<van-form @submit="onSubmit">
			<van-field required v-model="model.name" name="name" label="姓名" placeholder="请输入姓名" />
			<van-field required v-model="model.phone" label="手机号" type="tel" placeholder="请输入手机号" />
			<van-field required readonly clickable :value="model.age" label="年龄" @touchstart.native.stop="show = true" placeholder="请输入年龄" />
			<van-field required name="radio" label="性别">
				<template #input>
					<van-radio-group v-model="model.sex" direction="horizontal">
						<van-radio name="男">男</van-radio>
						<van-radio name="女">女</van-radio>
					</van-radio-group>
				</template>
			</van-field>
			<van-field v-model="model.ways" name="name" label="推荐人" placeholder="请输入姓名" />

			<div style="margin: 16px;">
				<van-button round block type="primary" native-type="submit">提交</van-button>
			</div>
		</van-form>

		<van-number-keyboard v-model="model.age" :show="show" :maxlength="3" title="请输入年龄" @blur="show = false" />

	</div>
</template>

<script>
	import { Notify } from 'vant';
	import axios from 'axios'
	import config from '../config'

	export default {
		name: 'register',

		data() {
			return {

				model: {

					openId: localStorage.getItem('openID'),
					age: '',

					ways: '',
					name: '',
					sex: '',
					phone: '',

				},
				verifyMsg: {

					name: '请输入姓名',
							phone: '请输入电话',
					age: '请选择年龄',
					sex: '请选择性别',
			

				},

				show: false,

				redirect_url: '/booked'

			}
		},
		methods: {
			toggle(index) {
				this.$refs.checkboxes[index].toggle();
			},

			verify() {
				for(let key in this.verifyMsg) {
					let obj = this.model[key]
					if(obj == '' || (Array.prototype.isPrototypeOf(obj) && obj.length === 0)) {
						Notify(this.verifyMsg[key]);
						return false
					}
					if(key === 'phone' && !/^[1][0-9]{10}$/.test(this.model.phone)) {
						Notify('请输入正确的手机号码');
						return false
					}
				}
				return true
			},
			onSubmit() {
				if(this.verify()) {
					let data = JSON.parse(JSON.stringify(this.model))

					axios.post(`${config.baseUrl}/do_save_customers`, data)
						.then((res) => {

							this.$router.push(this.$route.query.redirect_url)
						})
						.catch(err => {
							Notify('提交失败')
						})
				}
			}
		},
		created() {
			if(this.$route.query.redirect_url) this.redirect_url = this.$route.query.redirect_url

		}
	}
</script>

<style scoped>
	.register-item-title {
		color: #999;
	}
	
	.on-submit {
		width: 100%;
		margin-top: .3rem;
	}
</style>