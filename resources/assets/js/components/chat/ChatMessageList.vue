<template>
    
		    <div id="chat_message_wrapper">
            <div class="conversation" v-for="chat in chatStore.conversation">
            <div class="media">
                <div class="media-left">
                  <img src="https://www.w3schools.com/bootstrap/img_avatar1.png" class="media-object" style="width:60px">
                </div>
                <div class="media-body">
                  <h4 class="media-heading">
                  {{chat.sender.name}}
                  <small>
                    <i>Posted on {{chat.created_at}}</i>
                  </small>
                  </h4>
                  <p>{{chat.chat}}</p>
                </div>
            </div>
            <hr>
            </div>            
        </div>

</template>


<script>

    import {mapState} from 'vuex';

    export default {

        computed: mapState({
                chatStore: state => state.chatStore,
                userStore: state => state.userStore
        }),       

    }
</script>