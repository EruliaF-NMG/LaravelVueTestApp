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
			

		<table class="table table-bordered">
			  <thead>
			    <tr>			      
			      <th>From</th>
			      <th>Subject</th>
			      <th>Time ago</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr v-for="message in MessageStore.messageSent"
				v-bind:class="[message.read== '0' ?'unread':'read']"
			    >			      
			      <td>{{message.receiver.name}}</td>
			      <td>
					<router-link 
					:to="{ path: '/message/'+message.id}"
					>
		              {{message.subject}}
		            </router-link>
			      </td>
			      <td>{{message.created_at}}</td>
			    </tr>
			   
			  </tbody>
		</table>
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
        }),

        created(){         		   
        	this.$store.dispatch('setUserMessageSent');
        	Vue.component('message-slide-bar',MessageSlideBar);
        }

    }

</script>