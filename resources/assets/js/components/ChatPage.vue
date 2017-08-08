<template>
    <div class="container">
        <div class="row">           
                    
        <div class="col-lg-3">
           <chat-user-list></chat-user-list>
        </div>
		<div class="col-lg-9">
            chat
        </div>
               
        </div>
    </div>
</template>


<script>

    import {mapState} from 'vuex';
    import ChatUserList from './chat/ChatUserList';
    

   Vue.component('example', require('./chat/ChatUserList.vue'));
    

    export default {

        computed: mapState({
                chatStore: state => state.chatStore
        }),

        created(){
            this.$store.dispatch('setUserList'); 
        }

    }
</script>