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
			
			<h3>{{ MessageStore.message.subject }}</h3>
			<br><br>
			<p>From : {{ MessageStore.message.sender.email }}
				<span class="pull-right">
					<small>
						{{ MessageStore.message.created_at }}
					</small>
				</span>
			</p>
			<br>
			<hr>
			<br>
			<p>{{ MessageStore.message.message }}</p>
	
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
        	console.log(this.$route.params.id);     		   
        	this.$store.dispatch('getPrivateMessageById',this.$route.params.id);
        	Vue.component('message-slide-bar',MessageSlideBar);
        },
        destroyed(){
        	this.$store.dispatch('clearMessage');
        }

    }

</script>