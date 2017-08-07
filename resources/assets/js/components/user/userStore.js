/*
* @Author: admin
* @Date:   2017-08-07 09:43:52
* @Last Modified by:   admin
* @Last Modified time: 2017-08-07 12:04:03
*/
const state ={
	authUser:null
}

const mutations ={

	SET_AUTH_USER(state,userObj){
		state.authUser=userObj;
	},

	REMOVE_AUTH_USER(state){
		state.authUser=null;
	}
	
}

const actions ={
	setUserObject:({commit},userObj) => {
		commit('SET_AUTH_USER',userObj);
	},
	removeUserObject:({commit}) => {
		commit('REMOVE_AUTH_USER');
	}
}

export default {
	state,mutations,actions
}