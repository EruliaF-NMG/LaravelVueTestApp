<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Example Component</div>

                   <!--  <div class="panel-body" v-for='notebook in notebooks'>
                       {{notebook}}
                   </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                notebooks:[],
                user:[],
            }
        },
        mounted() {

            var self=this;

            const postUser ={
            grant_type : 'password',
            client_id : '2',
            client_secret : 'qlSreb1B5H4O8E4vplAVEWEnD65MlxIyC2896WV1',
            username : 'nisal.nmg@gmail.com',
            password : '12345',
            scope : ''
            };



            axios.post('/oauth/token',postUser)
                    .then(function(response){

                        self.notebooks=response.data;
                        console.log(self.notebooks);
                        
                        axios.get('/api/user',{
                              headers: {'Authorization': 
                              'Bearer '+self.notebooks.access_token
                              }
                        }).then(function(response){
                            self.user=response.data;
                            console.log(self.user);
                        })
                        .catch(function (error) {
                            console.log(error);
                        }); 

                    })
                    .catch(function (error) {
                            console.log(error);
                    }); 
        }
    }
</script>
