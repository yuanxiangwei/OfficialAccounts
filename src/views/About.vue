<template>
	<div>
		<van-swipe :autoplay="5000">
			<van-swipe-item v-for="(image, index) in images" :key="index">
				<img v-lazy="image" />
			</van-swipe-item>
		</van-swipe>
		<div class="hospital-box">
			<p class="hospital-box-title border-b">门诊列表</p>
			<div class="hospital-item border-b" @click="gotoDetails">
					<van-image class="hospital-img" src="https://img.yzcdn.cn/vant/cat.jpeg" />
					<div class="hospital-right">
						<p>疾控家园大门门诊部</p>
						<p>沈阳市大东区小十字街10号5门</p>
					</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				loading: false,
				finished: false,
				list: [1],
				images: [
					'https://img.yzcdn.cn/vant/apple-1.jpg',
					'https://img.yzcdn.cn/vant/apple-2.jpg',
				],
			}
		},
		methods: {
	gotoDetails(){
		this.$router.push('details')
	}
		},
		mounted() {

		}
	}
</script>

<style scoped>
	img {
		width: 100%;
		height: 4rem;
	}
	
	.hospital-box {
		padding: 0 0.3rem;
		text-align: left;
	}
	.hospital-box-title {
		font-size: .32rem;
		line-height: .8rem;
		font-weight: 600;

	}
	.hospital-item{
		padding: .24rem 0;
		display: flex;
		height: 1.2rem
	}
	.hospital-img{
		flex-shrink:0;
		width: 1.2rem;
		height: 1.2rem;
	}
	.hospital-right{
		padding:.2rem .24rem ;
	}
	.hospital-right p:first-child{
		font-size: .28rem;
		line-height: .4rem;
	}
	.hospital-right p:last-child{
		font-size: .24rem;
		color: #999;
		line-height: .4rem;
	}
</style>