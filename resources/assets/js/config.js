/*
* @Author: admin
* @Date:   2017-08-06 13:45:49
* @Last Modified by:   nishal
* @Last Modified time: 2017-08-26 08:35:39
*/

export const clientId="2";

export const clientSecret = "qlSreb1B5H4O8E4vplAVEWEnD65MlxIyC2896WV1";

export const apiDomain="http://localhost:8000/";

export const loginUrl=apiDomain+"oauth/token";

export const getUser=apiDomain+"api/user";

export const getUserList=apiDomain+"api/getUserChatList";

export const getUserconversation=apiDomain+"api/getUserConversation";

export const setUserconversation=apiDomain+"api/setUserconversation";

export const getUserNotification=apiDomain+"api/getUserNotification";
export const getPrivateMessages=apiDomain+"api/getPrivateMessages";
export const getPrivateMessageById=apiDomain+"api/getPrivateMessageById";
export const getPrivateMessageSent=apiDomain+"api/getPrivateMessageSent";
export const sentPrivateMessage=apiDomain+"api/sentPrivateMessage";


export const getHeader = function(){

	const tokenData=JSON.parse(localStorage.getItem("userInfo"));	
	
	const headers={
		'Accept':'application/json',
		'Authorization':'Bearer '+ tokenData.access_token
	};

	

	return headers;
}