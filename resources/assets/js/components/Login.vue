<template>
    <div class="container">
        

<form class="form-horizontal" v-on:submit.prevent="authUser()">
  <fieldset>
    <legend>Login Here</legend>

    <div class="form-group">
      <label for="inputEmail" class="col-lg-2 control-label">Email</label>
      <div class="col-lg-10">
        <input class="form-control" id="inputEmail" placeholder="Email" 
        type="text" v-model="userData.email" >
      </div>
    </div>

    <div class="form-group">
      <label for="inputPassword" class="col-lg-2 control-label">Password</label>
      <div class="col-lg-10">
        <input class="form-control" id="inputPassword" placeholder="Password" 
        type="password" v-model="userData.pwd">        
      </div>
    </div>

    <div class="form-group">
      <div class="col-lg-10 col-lg-offset-2">
        <button type="reset" class="btn btn-default">Cancel</button>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>

    </fieldset>

    </form>

    </div>
</template>

<script>

    import {mapState} from 'vuex';
    import {loginUrl,clientId,clientSecret,getUser,getHeader} from '../config';

    export default {
        computed: mapState({
                userStore: state => state.userStore
        }),
        data(){
            return{
                userData:{
                    email:"",
                    pwd:""
                },
                /*authUser:{access_token:"",refresh_token:""}  */                        
            }
        },
        methods:{


            authUser(){         
                
                const postUser ={
                    grant_type : 'password',
                    client_id : clientId,
                    client_secret : clientSecret,
                    username : this.userData.email,
                    password : this.userData.pwd,
                    scope : ''
                };

                var self=this;
                const userToken={};

                axios.post(loginUrl,postUser)
                    .then(function(response){

                    if(response.status == 200){

                        

                        userToken.access_token = response.data.access_token;
                        userToken.refresh_token = response.data.refresh_token; 

                    localStorage.setItem("userInfo",JSON.stringify(userToken));
                    

                    axios.get(getUser,{ headers: getHeader() })
                    .then(function(response){ 

                        userToken.email = response.data.name;
                        userToken.name = response.data.email; 

                        localStorage.setItem("userInfo",JSON.stringify(userToken));
                        self.$store.dispatch('setUserObject',userToken); 
                        self.$router.push('/dashboard');
                            
                    })
                    .catch(function (error) {
                            console.log(error);
                    }); 

                    }                                  

                    })
                    .catch(function (error) {
                            console.log(error);
                    }); 

                
            }

        },
        mounted() {
        }
        
    }
</script>


