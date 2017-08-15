/*
* @Author: Nisal
* @Date:   2017-08-08 21:07:50
* @Last Modified by:   Nisal
* @Last Modified time: 2017-08-15 20:08:42
*/
/*import Vue from 'vue';
import axios from 'axios';*/
import {getUserList,getHeader} from '../../config';

const state ={
	userList:null,
	currentChatUser:null,
	conversation:null

}

const mutations ={

	SET_USER_LIST(state,userList){
		state.userList=userList;
	},
	SET_CURRENT_CHAT_USER(state,user){
		state.currentChatUser=user;
	},
	SET_CONVERSATION(state,conversation){
		state.conversation=conversation;
	}		
}

const actions ={
	setUserList:({commit},userList) => {
		//
		
		return axios.get(getUserList,{ headers: getHeader() })
                .then(function(response){
                if(response.status == 200){ 
                  commit('SET_USER_LIST',response.data);
                  console.log(response.data);
                  return response.data;
                }                            
        })
                   
	},
	setCurrentChatUser:({commit},user) => {

		commit('SET_CURRENT_CHAT_USER',user);
		console.log(user);

		/*let postData= { id:user.id } ;

		return axios.get(getUserconversation,postData,{ headers: getHeader() })
                .then(function(response){
                if(response.status == 200){ 
                  commit('SET_CURRENT_CHAT_USER',user);
                  commit('SET_CONVERSATION',response.data);
                  console.log(response.data);
                  return response.data;
                }                            
        })*/


	}

}

export default {
	state,mutations,actions
}