<template>
	<div>

		<page-title title="预约登记表" :subTitle="storeName"></page-title>
		<van-form @submit="onSubmit">
			<van-field 
    required readonly clickable name="datetimePicker" :value="model.kkYyDates" label="预约日期" placeholder="请选择日期" @click="showCalendar = true" />
<!--			
			<van-field readonly clickable name="datetimePicker" :value="model.kkYyOnTime" label="选择时间" placeholder="点击选择时间" @click="showPickerTime = true" />-->

			<van-field   required v-model="model.contact" name="name" label="姓名" placeholder="请输入姓名" />
			<van-field   required readonly clickable :value="model.age" label="年龄" @touchstart.native.stop="show = true" placeholder="请输入年龄" />
			<van-field    required name="radio" label="性别">
				<template #input>
					<van-radio-group v-model="model.sex" direction="horizontal">
						<van-radio name="男">男</van-radio>
						<van-radio name="女">女</van-radio>
					</van-radio-group>
				</template>
			</van-field>
			<van-field   required v-model="model.mobile" label="手机号" type="tel" placeholder="请输入手机号" />
			<van-field v-model="model.idCard" type="number" label="身份证号" placeholder="请输入身份证号" />
			<van-field   required readonly clickable name="area" :value="model.address" label="居住地" placeholder="选择省市区" @click="showArea = true" />
			<div style="margin: 16px;">
				<van-button round block type="primary" native-type="submit">立即挂号</van-button>
			</div>
		</van-form>
		<van-popup v-model="showArea" position="bottom">
			<van-area title="选择居住地" :area-list="areaList" @confirm="onAreaConfirm" @cancel="showArea = false" value="210000" />
		</van-popup>
		<van-number-keyboard v-model="model.age" :show="show" :maxlength="3" title="请输入年龄" @blur="show = false" />
		<van-calendar title="选择预约日期" v-model="showCalendar" @confirm="onConfirm" />
		<van-popup v-model="showPickerTime" position="bottom">
			<van-datetime-picker type="time" title="选择时间" :value="model.kkYyOnTime" @confirm="onTimeConfirm" @cancel="showPickerTime = false" />
		</van-popup>
	</div>
</template>

<script>
	import PageTitle from './title.vue'
	import areaList from './area.js'
	import { Notify } from 'vant';
	import axios from 'axios'
	import config from '../config'
	const FORMATDATE = function(date){
		return  `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
	}
	export default {
		name: 'register',
		components: {
			PageTitle
		},
		data() {
			return {
				storeName: this.$route.query.name,
				model: {
					orgId: this.$route.query.id,
					openidOwn: localStorage.getItem('openID'),
					age: localStorage.getItem('userAge')||'',
					idCard:'',
		//			kkYyOnTime: '09:00',
					kkYyDates: FORMATDATE(new Date()),
					contact: localStorage.getItem('userName')||'',
					sex:  localStorage.getItem('userSex')||'',
					mobile: localStorage.getItem('userPhone')||'',
					address: ''
				},
				verifyMsg: {
					kkYyDates: '请选择预约日期',
					contact: '请输入姓名',
					age: '请选择年龄',
					sex: '请选择性别',
					mobile: '请输入电话',
					address: '请选择区域',

				},
				areaList: areaList,
				showCalendar: false,
				showPickerTime: false,
				show: false,
				showArea: false,
				list: [{
					label: '狂犬',
					value: 1
				}, {
					label: '乙肝',
					value: 2
				}, {
					label: '甲肝',
					value: 3
				}, {
					label: '戊肝',
					value: 4
				}, {
					label: '宫颈癌',
					value: 5
				}, {
					label: '破伤风',
					value: 6
				}, {
					label: '流感',
					value: 7
				}, {
					label: '肺炎',
					value: 8
				}, {
					label: '水痘',
					value: 9
				}, {
					label: '其他',
					value: 10
				}, ],

			}
		},
		methods: {
			toggle(index) {
				this.$refs.checkboxes[index].toggle();
			},
			onTimeConfirm(time) {
				this.model.kkYyOnTime = time;
				this.showPickerTime = false;
			},
			onAreaConfirm(values) {

				this.model.address = values
					.filter((item) => !!item)
					.map((item) => item.name)
					.join(' ');
				this.showArea = false;
			},
			onConfirm(date) {
				this.model.kkYyDates =FORMATDATE(date)
				this.showCalendar = false;
			},
			verify() {
				for(let key in this.verifyMsg) {
					let obj = this.model[key]
					if(obj == '' || (Array.prototype.isPrototypeOf(obj) && obj.length === 0)) {
						Notify(this.verifyMsg[key]);
						return false
					}
					if(key === 'mobile' && !/^[1][0-9]{10}$/.test(this.model.mobile)) {
						Notify('请输入正确的手机号码');
						return false
					}
				}
				return true
			},
			onSubmit() {
				if(this.verify()) {
					let data = JSON.parse(JSON.stringify(this.model))
					data.kkYyOnTime = '00:00:00'
					data.kkYyDates = data.kkYyDates.replace('年', '-').replace('月', '-').replace('日', '')
					axios.post(`${config.baseUrl}/save_yy_gh`, data)
						.then((res) => {
								Notify({
								type: 'success',
								message: '挂号成功'
							});
							this.$router.push('myBookings')
						})
						.catch(err => {
							Notify('挂号失败')
						})
				}
			}
		},
		created() {

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