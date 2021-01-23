<template>
	<div>
		<van-swipe :autoplay="5000">
			<van-swipe-item v-for="(image, index) in images" :key="index">
				<img v-lazy="image" />
			</van-swipe-item>
		</van-swipe>
		<div class="hospital-box">
			<p class="hospital-box-title border-b">门诊列表</p>
			<van-list v-model="loading" style="min-height: 5rem;" :finished="finished" finished-text="没有更多了" @load="onLoad">
				<van-cell v-for="(item,index) in list" :key="index"  @click="gotoDetails(item)">
					<div class="hospital-item" >
						<van-image class="hospital-img" :src="item.imgUrl" />
						<div class="hospital-right">
							<p>{{item.storeName}}</p>
							<p>{{item.storeAddress}}</p>
						</div>
					</div>
				</van-cell>
			</van-list>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import config from '../config'
	export default {
		name: '',
		data() {
			return {
				loading: false,
				finished: false,
				pageId: 0,
				list: [],
				images: [
					require('../assets/slideshow1.jpg'),
					require('../assets/slideshow2.jpg'),
					require('../assets/slideshow3.jpg'),
				],
			}
		},
		methods: {
			gotoDetails(row) {
				console.log(row)
				this.$router.push({path:'/hospitalDetails',query:row})
			},
			onLoad() {
				axios.get(`${config.baseUrl}/ajax_search_mzb?pageId=${this.pageId}&pageSize=10`)
					.then((res) => {
						this.loading = false
						this.pageId++
							this.list = this.list.concat(res.data.records)
						this.list.forEach(item => {
							item.imgUrl = config.imgBaseUrl + item.storePic
						})
						if(this.list.length >= res.data.total) this.finished = true
						console.log(res);
					})
					.catch(err => {
						this.loading = false
						alert('加载失败')
					})
			}
		},
		created() {

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
		font-size: .36rem;
		line-height: .8rem;
		font-weight: 600;
	}
	
	.hospital-item {
		
		display: flex;
		height: 1.2rem;
	}
	
	.hospital-img {
		flex-shrink: 0;
		width: 1.2rem;
		height: 1.2rem;
	}
	
	.hospital-right {
		padding: .1rem .24rem;
	}
	
	.hospital-right p:first-child {
		font-size: .32rem;
		line-height: .6rem;
	}
	
	.hospital-right p:last-child {
		font-size: .28rem;
		color: #999;
		line-height: .4rem;
	}
</style>