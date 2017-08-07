<template>
<div>
     <top-menu></top-menu>
     <router-view></router-view>
</div>
</template>

<script>

import {mapState} from 'vuex';
import TopMenu from './components/include/TopMenu';


Vue.component('top-menu', TopMenu);

    export default {
        
        computed: mapState({
                userStore: state => state.userStore
        }),

        created(){
            const userObj=JSON.parse(localStorage.getItem("userInfo")); 
            this.$store.dispatch('setUserObject',userObj); 
        }
       
    }
</script>
