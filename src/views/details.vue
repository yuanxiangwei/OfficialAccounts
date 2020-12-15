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
			<van-icon name="phone-o"  class="phone" @click="openDia"/>
			
		</div>
		<van-dialog v-model="show" :show-confirm-button="false" :overlay="true" :close-on-click-overlay="true">
	<a href="tel://139ｘｘｘｘｘｘｘｘ" class="border-b">呼叫</a>
		<a href="" class="border-b">呼叫</a>
			<a href="wtai://wp/ap;137ｘｘｘｘｘｘｘｘ;" class="border-b">呼叫</a>
</van-dialog>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				show:false,
				images: [
					'https://img.yzcdn.cn/vant/apple-1.jpg',

				],
			}
		},
		methods: {
openDia(){
	this.show = true
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