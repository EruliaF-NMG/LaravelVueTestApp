/*
* @Author: Nisal
* @Date:   2017-08-08 21:07:50
* @Last Modified by:   Nisal
* @Last Modified time: 2017-08-08 22:15:51
*/
/*import Vue from 'vue';
import axios from 'axios';*/
import {getUserList,getHeader} from '../../config';

const state ={
	userList:null
}

const mutations ={

	SET_USER_LIST(state,userList){
		state.userList=userList;
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
                   
	}	
}

export default {
	state,mutations,actions
}