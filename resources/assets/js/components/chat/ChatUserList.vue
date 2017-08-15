<template>
    <div>    
        <ul class="list-group">
            <li             
            class="list-group-item" 
            :class="[{active:userActiveStyle(user)}]"
            v-on:click='changeChatUser(user)'
            v-if="userStore.authUser.name != user.email"
            v-for="user in chatStore.userList">
            {{user.name}}
            </li>
        </ul>
    </div>
</template>

<script>

    import {mapState} from 'vuex';

    export default {

        computed: mapState({
                chatStore: state => state.chatStore,
                userStore: state => state.userStore
        }),

         methods: {

            userActiveStyle:function(user){

                if(this.chatStore.currentChatUser == null){
                    return false;
                }else if(this.chatStore.currentChatUser.id == user.id){
                    return true;
                }else{
                    return false;
                }

            },

            changeChatUser:function(user){
                this.$store.dispatch('setCurrentChatUser',user);
            }

        }

    }
</script>