/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import VueRouter from 'vue-router';


let routes = [
  { 
  	path: '/', 
    component:require('./components/Example')
  },
  { 
 	path: '/login', 
    component:require('./components/Login'),
    meta: { requiresAuth: false }
  },
  { 
   path: '/dashboard', 
   component:require('./components/Dashboard'),
   meta: { requiresAuth: true }
  },
  { 
   path: '/chat', 
   component:require('./components/ChatPage'),
   meta: { requiresAuth: true }
  },
  { 
   path: '/message', 
   component:require('./components/message/MessageInbox'),
   meta: { requiresAuth: true }
  },
  { 
   path: '/sent', 
   component:require('./components/message/MessageSent'),
   meta: { requiresAuth: true }
  },
  { 
   path: '/create', 
   component:require('./components/message/MessageCreate'),
   meta: { requiresAuth: true }
  },
  { 
   path: '/message/:id', 
   component:require('./components/message/MessageView'),
   meta: { requiresAuth: true }
  }
];


export default new VueRouter({
  routes,
  mode: 'history'
});