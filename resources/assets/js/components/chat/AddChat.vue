<template>
    <div class="addChat">    
       <form v-on:submit.prevent="manageAddChat()">
        <div class="form-group">
           <input type="text" class="form-control" name="chat" v-model="message">
        </div>
       </form>

    </div>
</template>

<script>

    import {mapState} from 'vuex';

    export default {

        computed: mapState({
                chatStore: state => state.chatStore,
                userStore: state => state.userStore
        }),

        created(){

          Echo.channel('leaderboard').listen('ScoreUpdated', (message) => {
              //console.log(message);
              this.incomingChat(message);
          });

        },

        data(){

            return {
                message :null,
            }

        },

         methods: {            
            manageAddChat(){
                if(this.message!=null){
                   let postData={
                        'receiver_id' : this.chatStore.currentChatUser.id,
                        'chat' : this.message
                   };

                   

                   this.$store.dispatch('addNewConvertaion',postData)
                   .then(response=>{
                    this.message=null
                   });
                }
            },
            incomingChat(chat){
                if(this.chatStore.currentChatUser.id==chat.sender_id){
                  if(this.userStore.authUser.name==chat.receiver.email){

                    this.$store.dispatch('newIncomingChat',chat)
                    .then(response=>{
                      
                      let element = document.getElementById('chat_message_wrapper');
                      element.scrollIntoView(false);
                      
                    });

                  }else{
                    console.log(chat);
                  }
                }
            }
        }

    }
</script>