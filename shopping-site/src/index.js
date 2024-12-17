import {createRouter, createWebHistory} from 'vue-router'
import Cart from './Cart.vue';
import Home from './Home.vue';
import App from './App.vue';
import Id from './Id.vue';
const routes=[


    {path:'/home',component:Home},
    
    { path: '/product/:id', component: Id},
    { path: '/cart', component: Cart},

]

const router=createRouter({


    history:createWebHistory(),
    routes,
})
export default router