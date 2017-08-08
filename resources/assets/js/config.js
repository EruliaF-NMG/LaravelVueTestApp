/*
* @Author: admin
* @Date:   2017-08-06 13:45:49
* @Last Modified by:   Nisal
* @Last Modified time: 2017-08-08 21:38:44
*/

export const clientId="2";

export const clientSecret = "Uux8Ln9Qq2pJPed3iVzvwrauNfO0hJFnJATqmS9O";

export const apiDomain="http://localhost:8000/";

export const loginUrl=apiDomain+"oauth/token";

export const getUser=apiDomain+"api/user";

export const getUserList=apiDomain+"api/user";


export const getHeader = function(){

	const tokenData=JSON.parse(localStorage.getItem("userInfo"));	
	
	const headers={
		'Accept':'application/json',
		'Authorization':'Bearer '+ tokenData.access_token
	};

	

	return headers;
}