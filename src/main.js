import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button , Swipe , SwipeItem,Lazyload,List,Cell,Image as VanImage,Icon ,Dialog    } from 'vant';
import './config.js'
Vue.use(Button)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(List)
Vue.use(Cell)
Vue.use(VanImage)
Vue.use(Icon)
Vue.use(Dialog)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
