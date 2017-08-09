<template>
    <div>    
        <ul>
            <li v-for="user in chatStore.userList">{{user.name}}</li>
        </ul>
    </div>
</template>

<script>

    import {mapState} from 'vuex';

    export default {

        computed: mapState({
                chatStore: state => state.chatStore
        }),

    }
</script>