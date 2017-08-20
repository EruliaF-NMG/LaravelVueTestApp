<template>
    <div class="container">
        <div class="row">           
                    
        <div class="col-lg-3">        
           <chat-user-list></chat-user-list>
        </div>
		<div class="col-lg-9" >          
           <div class="col-lg-12">
               <chat-message-list></chat-message-list>
           </div>


            <div class="col-lg-12" >
            <add-chat></add-chat>
            </div>
        </div>



               
        </div>
    </div>
</template>


<script>

    import {mapState} from 'vuex';
    import ChatUserList from './chat/ChatUserList';
    import AddChat from './chat/AddChat';
    import ChatMessageList from './chat/ChatMessageList';
    

    export default {

        computed: mapState({
                chatStore: state => state.chatStore,
                userStore: state => state.userStore
        }),

        created(){
            this.$store.dispatch('setUserList'); 
            Vue.component('chat-user-list',ChatUserList);
            Vue.component('add-chat',AddChat);
            Vue.component('chat-message-list',ChatMessageList);
        }

    }
</script>