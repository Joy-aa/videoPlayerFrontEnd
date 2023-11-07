import {createRouter,createWebHashHistory }from 'vue-router'
import homepage from '@/pages/homepage/homepage.vue'
import searchpage from '@/pages/homepage/searchpage.vue'
import videopage from '@/pages/homepage/videopage.vue'
import history from '@/pages/history/App.vue'
import login from "@/pages/loginIn/login.vue";
import user from '@/pages/user/AdminInfo.vue'
import userpage from '/src/pages/homepage/userpage.vue'
import notloginpage from '/src/pages/homepage/notloginuserpage.vue'

const routes = [
    {
        path: '/',
        redirect: '/homepage'
    },
    {
        path: '/homepage',
        component: homepage
    },
    {
        path: '/searchpage',
        component: searchpage
    },
    {
        path: '/videopage/:videoid/:index',
        component: videopage
    },
    {
        path: '/userpage/:userid',
        component: userpage,
    },
    {
        path: '/notloginpage/',
        component: notloginpage
    },
    // {
    //     path: '/uploadvideo/:userid',
    //     component: newuploadvideo
    // },
    {
        path: '/history',
        component: history
    },
    {
        path: '/signin',
        name:'/signin',
        component: login
    },
    {
        path: '/user',
        name:'AdminInfo',
        component: user
    },
]
const router1 = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
// router1.beforeEach(
//     (to, from, next) => {
//         if (to.path === '/homepage') {
//             next();
//         } else {
//             const token = Cookies.get('userTicket')
//             console.log("-> token", token);
//             if (token === undefined || token === '' || token === null) {
//                 next('/signin');
//             } else {
//                 next();
//             }
//         }
//     });
export const router = router1;


// 写个注释