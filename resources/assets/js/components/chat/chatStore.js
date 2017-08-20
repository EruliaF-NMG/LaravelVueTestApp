/*
* @Author: Nisal
* @Date:   2017-08-08 21:07:50
* @Last Modified by:   nishal
* @Last Modified time: 2017-08-20 08:20:50
*/
/*import Vue from 'vue';
import axios from 'axios';*/
import {getUserList,getHeader,getUserconversation,setUserconversation} from '../../config';

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
	},
	ADD_TO_CONVERSATION(state,chat){
		state.conversation.push(chat)
	}		
}

const actions ={
	setUserList:({commit},userList) => {
		//
		
		return axios.get(getUserList,{ headers: getHeader() })
                .then(function(response){
                if(response.status == 200){ 
                  commit('SET_USER_LIST',response.data);
                  //console.log(response.data);
                  return response.data;
                }                            
        })
                   
	},
	setCurrentChatUser:({commit},user) => {

		/*commit('SET_CURRENT_CHAT_USER',user);
		console.log(user);*/
		/*console.log("click");*/
		let postData= { id:user.id } ;
		
		return axios.get(getUserconversation,{ headers: getHeader(), params: postData })
                .then(function(response){
                if(response.status == 200){ 
               	  /*console.log(response.data);*/
                  commit('SET_CURRENT_CHAT_USER',user);
                  commit('SET_CONVERSATION',response.data);
                  
                  //return response.data;
                }                            
        });


	},

	addNewConvertaion:({commit},postData) => {

		return axios.post(setUserconversation,postData,{headers: getHeader()})
                .then(function(response){
                if(response.status == 201){ 
               	  /*console.log(response.data);*/
                  commit('ADD_TO_CONVERSATION',response.data);
                 
                }                            
        });

	},

	newIncomingChat:({commit},chat) => {
		commit('ADD_TO_CONVERSATION',chat);
	}

}

export default {
	state,mutations,actions
}