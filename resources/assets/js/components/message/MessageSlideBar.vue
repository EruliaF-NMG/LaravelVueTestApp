<template>
    <div>    
        <ul class="list-group">
            <router-link to="/message" tag="li" class="list-group-item">
              <a>Inbox</a>
            </router-link>
            <router-link to="/sent" tag="li" class="list-group-item">
              <a>Sent</a>
            </router-link>
            <router-link to="/create" tag="li" class="list-group-item">
              <a>Create Message</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {

    }
</script>