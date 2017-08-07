<template>
<div class="">
    <nav class="navbar navbar-default" v-if="userStore.authUser !== null && userStore.authUser.access_token">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <router-link to="/dashboard" tag="li">
              <a>Dashboard</a>
        </router-link>
        <router-link to="/chat" tag="li">
              <a>Chat</a>
        </router-link>
        
      </ul>
     
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a v-on:click="userLogout()">Log Out</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</div>
</template>

<script>

  import {mapState} from 'vuex';

    export default {      

        computed: mapState({
                userStore: state => state.userStore
        }),

        methods:{ 

          userLogout(){            
            this.$store.dispatch('removeUserObject'); 
            localStorage.removeItem("userInfo");
            this.$router.push('/login');
          }

        }
        
    }
</script>