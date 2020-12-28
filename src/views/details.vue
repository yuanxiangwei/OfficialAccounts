<template>
	<div>
		<img :src="data.imgUrl" />
		<div class="details-content 	border-b">
			<div class="details-left">
				<p>{{data.storeName}}</p>
				<p>{{data.storeAddress}}</p>
				<p>{{data.storePhone}}</p>
			</div>
			<van-icon name="phone-o" class="phone" @click="phone" />

		</div>
		<div class="border-b business-time">
			<van-icon name="clock-o" /> {{data.storeXx}}
		</div>
		<van-button type="primary" @click="gotoBooking" class="booking">立即预约</van-button>
	</div>
</template>

<script>
	import axios from 'axios'
	import config from '../config'
	export default {
		name: 'hospitalDetails',

		data() {
			return {
				data: {},

			}
		},
		methods: {
			gotoBooking() {
				this.$router.push({
					path: '/register',
					query: {
						id: this.data.orgId,
						name: this.data.storeName
					}
				})
			},
			phone() {
				window.location.href = 'tel:' + this.data.storePhone
			},
			getData() {
				axios.get(`${config.baseUrl}/${this.data.id}/ajax_search_mzb_by_id`)
					.then(res => {
						console.log(res)
					})
					.catch(err => {
						alert(err)
					})
			}
		},
		created() {
			this.data = this.$route.query

		}
	}
</script>

<style scoped>
	img {
		width: 100%;
		height: 6rem;
	}
	
	.details-content {
		padding: 0.3rem;
		display: flex;
		align-items: center;
		justify-content: space-between
	}
	
	.details-left {
		padding: 0 .3rem;
	}
	
	.details-left p {
		font-size: .24rem;
		color: #999;
		line-height: 1.3em;
	}
	
	.details-left p:first-child {
		color: #333;
		font-size: .32rem;
		line-height: 2em;
	}
	
	.phone {
		font-size: .5rem;
		color: #07c160;
	}
	
	.business-time {
		line-height: .7rem;
		padding-left: .6rem;
		font-size: .3rem;
		color: #999;
		display: flex;
		align-items: center;
	}
	
	/deep/.business-time i {
		margin-right: .05rem;
	}
	
	.booking {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
	
	a {
		color: #333;
		font-size: .3rem;
		line-height: 1rem;
		display: block;
		padding-left: .3rem;
	}
</style>