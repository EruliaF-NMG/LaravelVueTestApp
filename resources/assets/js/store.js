/*
* @Author: admin
* @Date:   2017-08-07 09:31:01
* @Last Modified by:   nishal
* @Last Modified time: 2017-08-26 08:31:53
*/

import Vue from 'vue';
import Vuex from 'vuex';
import userStore from './components/user/userStore';
import chatStore from './components/chat/chatStore';
import MessageStore from './components/message/MessageStore';

Vue.use(Vuex);

const debug=process.env.NODE_ENV !=="production";

export default new Vuex.Store({
	modules:{
		userStore,chatStore,MessageStore
	},
	strict:debug
});