<template>
<div class="container">
	<div class="row">  
		<div class="messageWrapper">
		
			<div class="messageList">
				<div class="col-lg-3">        
		           <message-slide-bar></message-slide-bar>
		        </div>
				<div class="col-lg-9" >          
		           <div class="col-lg-12">

		          <form class="form-horizontal" v-on:submit.prevent="sendMessage()">
		         
				  <fieldset>
				    <legend>Send Message</legend>

				    <div class="form-group">
				      <label for="selectUser" 
				      class="col-lg-2 control-label">User</label>
				      <div class="col-lg-10">
				       <select class="form-control" v-model="message.userSelected" id="selectUser" placeholder="select User">
						  <option v-for="user in userStore.users" 
						  v-bind:value="user.id"   
						  >{{user.name}}</option>						  
					   </select> 
				        
				      </div>
				    </div>

				 <div class="form-group">
			      <label for="subject" class="col-lg-2 control-label">Subject</label>
			      <div class="col-lg-10">
			        <input class="form-control" id="subject" placeholder="Subject" 
			        type="text" v-model="message.subject" >
			      </div>
			    </div>

			    <div class="form-group">
			      <label for="message" class="col-lg-2 control-label">Message</label>
			      <div class="col-lg-10">
			        <textarea v-model="message.message" style="width:100%;">  	
			        </textarea>      
			      </div>
			    </div>

				    <div class="form-group">
				      <div class="col-lg-10 col-lg-offset-2">
				        <button type="reset" class="btn btn-default">Cancel</button>
				        <button type="submit" class="btn btn-primary">Send</button>
				      </div>
				    </div>

				    </fieldset>

				    </form>
					

			
				   </div>
				</div>
			</div>


		</div>
	</div>
</div>
</template>

<script>

	import {mapState} from 'vuex';
	import MessageSlideBar from './MessageSlideBar';

    export default { 

    	computed: mapState({
                MessageStore: state => state.MessageStore,
                userStore: state => state.userStore
        }),

        created(){         		   
        	this.$store.dispatch('setUsers');
        	Vue.component('message-slide-bar',MessageSlideBar);   	     	
        },

        data(){
        	return {
        		message:{
	        		userSelected:null,
	        		subject:'',
	        		message:''
        		}        		
        	}
        },
        methods:{
        	sendMessage(){

        		var self=this;
        		
        		let postData={
        			'receiver_id' : this.message.userSelected,
        			'message' : this.message.subject,
        			'subject' : this.message.message,
        		};

        		this.$store.dispatch('sentPrivateMessage',postData)
                   .then(response=>{
                    self.$router.push('/sent');
                   });


        	}
        }
        
        

    }

</script>