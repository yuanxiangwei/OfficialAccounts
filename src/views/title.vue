<template>
		<div class="page-title">
			<p class="title">{{title}}</p>
			<p class="sub-title">{{subTitle}}</p>
		</div>
</template>

<script>
export default {
  name: '',
  props:['title','subTitle'],
  data () {
    return {
 
    }
  },
  methods:{

  },
  created(){

  }
}
</script>

<style scoped>
.page-title{
	min-height: 1.4rem;
	background: #ededed;
	padding: .3rem 0 0 .3rem;
}
.page-title .title{
	font-size: .4rem;
	line-height:2;
}
.sub-title{
	font-size: .22rem;
	color: #999;
}
</style>