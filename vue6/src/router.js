import VueRouter from 'vue-router'

import Login from './components/login.vue'
import Register from './components/register.vue'
import User1 from './components/child/user1.vue'
import User2 from './components/child/user2.vue'

const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/register'},
        {path:'/login',component: Login},
        {path:'/register',component: Register,
            children:[{path:'/user1',component:User1},
                    {path:'/user2',component:User2}]
               }
           ]
})
export  default router;








