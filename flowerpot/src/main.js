// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store  from './store' 

import {mapState}   from 'vuex'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Mint)

const VueResource = require('vue-resource')
Vue.use(VueResource)

Vue.filter('toDate', date => {
	const d = new Date(date)
	return d.getFullYear() + '年' +
	(d.getMonth() + 1) + '月' +
	d.getDate() + '日'
})

Vue.filter('toDateTime', date => {
	const d = new Date(date)
	return d.getFullYear() + '年' +
	(d.getMonth() + 1) + '月' +
	d.getDate() + '日   '+
	d.getHours() + ':' + d.getMinutes()
})

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})

