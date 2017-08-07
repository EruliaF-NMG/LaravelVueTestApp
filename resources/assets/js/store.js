/*
* @Author: admin
* @Date:   2017-08-07 09:31:01
* @Last Modified by:   admin
* @Last Modified time: 2017-08-07 10:59:34
*/

import Vue from 'vue';
import Vuex from 'vuex';
import userStore from './components/user/userStore';

Vue.use(Vuex);

const debug=process.env.NODE_ENV !=="production";

export default new Vuex.Store({
	modules:{
		userStore
	},
	strict:debug
});