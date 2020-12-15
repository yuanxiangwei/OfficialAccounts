<template>
	<div>
		<van-swipe :autoplay="5000">
			<van-swipe-item v-for="(image, index) in images" :key="index">
				<img v-lazy="image" />
			</van-swipe-item>
		</van-swipe>
		<div class="details-content">
			<div class="details-left">
				<p>疾控家园大门门诊部</p>
				<p>沈阳市大东区小十字街10号5门</p>
				<p>18888</p>
			</div>
			<van-icon name="phone-o"  class="phone" @click="phone"/>
			
		</div>

	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {

				images: [
					'https://img.yzcdn.cn/vant/apple-1.jpg',

				],
			}
		},
		methods: {
phone(){
 window.location.href = 'tel://18530285173'
}
		},
		created() {

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
		justify-content:space-between
	}
	
	.details-left {
		padding: 0 .3rem;
	}
	
	.details-left p {
		font-size: .2rem;
		color: #999;
		line-height: 1.2em;
	}
	
	.details-left p:first-child {
		color: #333;
		font-size: .28rem;
		line-height: 2em;
	}
	.phone{
	font-size: .5rem;
		color: #07c160;
	}
	a{
		color: #333;
		font-size: .3rem;
		line-height: 1rem;
		display: block;
		padding-left: .3rem;
	}
</style>