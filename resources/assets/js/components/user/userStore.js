/*
* @Author: admin
* @Date:   2017-08-07 09:43:52
* @Last Modified by:   nishal
* @Last Modified time: 2017-08-26 17:00:07
*/

import {getUserList,getHeader} from '../../config';


const state ={
	authUser:null,
	users:null
}

const mutations ={

	SET_AUTH_USER(state,userObj){
		state.authUser=userObj;
	},

	REMOVE_AUTH_USER(state){
		state.authUser=null;
	},

	SET_USERS(state,users){
		state.users=users;
	},
	
}

const actions ={
	setUserObject:({commit},userObj) => {
		commit('SET_AUTH_USER',userObj);
	},
	removeUserObject:({commit}) => {
		commit('REMOVE_AUTH_USER');
	},
	setUsers:({commit}) => {		//
		
		return axios.get(getUserList,{ headers: getHeader() })
                .then(function(response){
                if(response.status == 200){ 
                  commit('SET_USERS',response.data);
                  console.log(response.data);
                  return response.data;
                }                            
        })
                   
	},
}

export default {
	state,mutations,actions
}