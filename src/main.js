import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import VueRouter from 'vue-router'

const MasonRestoration = () => import('./components/Restoration.vue')
const Homepage = () => import('./pages/Homepage.vue')

const router = new VueRouter({
mode: 'history',
  base: __dirname,
  routes: [
  	{ path: '', component: Homepage },
    { path: '/mason-restoration', component: MasonRestoration }
  ]
})

Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
	router,
  i18n,
  render: h => h(App)
}).$mount('#app')