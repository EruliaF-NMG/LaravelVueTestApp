
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import 'es6-promise/auto'
import router from './routes.js';
import axios from 'axios';
import store from './store.js';

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('app', require('./Appindex.vue'));
//
router.beforeEach((to, from, next) => {
  	const auth=JSON.parse(localStorage.getItem("userInfo"));  	
  	if(to.meta.requiresAuth && to.meta.requiresAuth==true){
	  	if(auth && auth.access_token){
	  		next();
	  	}else{	  		
	  		next('/login');
	  	}
	}else{
  	next();
    }
})

const app = new Vue({
    el: '#app',
    router,
    axios,
    store
});

