/*
* @Author: nishal
* @Date:   2017-08-26 08:27:13
* @Last Modified by:   nishal
* @Last Modified time: 2017-08-27 11:58:37
*/
import {getHeader,getPrivateMessages,getPrivateMessageSent,getPrivateMessageById,sentPrivateMessage} from '../../config';


const state ={
	notifications:[],
	messageRec:[],
	messageSent:[],
	message:{
		subject :'',
		message:'',
		sender:''
	}
}

const mutations ={
	SET_USER_MESSAGE_REC(state,messageList){
		state.messageRec=messageList;
	},
	SET_USER_MESSAGE_SENT(state,messageList){
		state.messageSent=messageList;
	},
	SET_USER_MESSAGE_VIEW(state,message){
		state.message=message;
	},
	CLEAR_MESSAGE_VIEW(state,message){
		state.message={
		subject :'',
		message:'',
		sender:''
	};
	},
	SEND_PRIVATE_MESSAGE(state,message){
		state.messageSent.push(message);
	},
	ADD_NEW_MESSAGE_NOTI(state,message){
		state.messageRec.unshift(message);
	}
	
}

const actions ={

	setUserMessageRec:({commit}) => {
		//
		
		return axios.get(getPrivateMessages,{ headers: getHeader() })
                .then(function(response){
                if(response.status == 200){ 
                  commit('SET_USER_MESSAGE_REC',response.data);
                  console.log(response.data);
                  return response.data;
                }                            
        })
                   
	},

	setUserMessageSent:({commit}) => {
		//
		
		return axios.get(getPrivateMessageSent,{ headers: getHeader() })
                .then(function(response){
                if(response.status == 200){ 
                  commit('SET_USER_MESSAGE_SENT',response.data);
                  console.log(response.data);
                  return response.data;
                }                            
        })
                   
	},

	getPrivateMessageById:({commit},id) => {
		//
		let postData= { id:id } ;
		return axios.post(getPrivateMessageById,postData,{ headers: getHeader() })
                .then(function(response){
                if(response.status == 200){ 
                  commit('SET_USER_MESSAGE_VIEW',response.data);
                  console.log(response.data);
                  return response.data;
                }                            
        })
                   
	},

	clearMessage:({commit}) => {
		commit('CLEAR_MESSAGE_VIEW');
	},

	sentPrivateMessage:({commit},postData) => {
		return	axios.post(sentPrivateMessage,postData,{headers: getHeader()})
                .then(function(response){
                if(response.status == 201){ 
               	  commit('SEND_PRIVATE_MESSAGE',response.data);
                  console.log(response.data);
                  return response.data;           
                }                            
        		});
	},

	newMessageNotification:({commit},message) => {
		commit('ADD_NEW_MESSAGE_NOTI',message);
	}

}

export default {
	state,mutations,actions
}