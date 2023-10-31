import {createRouter,createWebHashHistory }from 'vue-router'
import homepage from '@/pages/homepage/App.vue'
import searchpage from '@/pages/homepage/searchpage.vue'
import details from '@/pages/homepage/details.vue'
import videopage from '@/pages/homepage/videopage.vue'
import history from '@/pages/history/App.vue'
import docDescription from '@/pages/doc/docDescription.vue'
import damModel from '@/pages/dam3d/damModel.vue'
import login from "@/pages/loginIn/login.vue";
import cifar from "@/pages/Cifar/cifar.vue";
import voc from "@/pages/VOC/voc.vue"
import coco from "@/pages/COCO/coco.vue"
import cub from "@/pages/cub/cub.vue"
import cars from "@/pages/cars/cars.vue"
import UserQuery from "@/pages/UserQuery/UserQuery.vue"
import imagenet from "@/pages/ImageNet/imagenet.vue";
import datasetPreview from "@/pages/datasetPreview/index.vue";
import datasetInDetail from "@/pages/datasetInDetail/index.vue";
import user from '@/pages/user/AdminInfo.vue'
import Algorithm from '@/pages/algorithmIntro/Algorithm.vue'
import twodresult from '@/pages/twodresult/ResultDisplay.vue'
import labelPage from '@/pages/imageLabel/labelPage.vue'
import UserImgclassification from "@/pages/UserQuery/UserImgclassification.vue"
import UserImgsegmentation from "@/pages/UserQuery/UserImgsegmentation.vue"
import tcav from "@/pages/TCAV/tcav.vue"
import Cookies from "js-cookie";

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
        path: '/homepage/:category',
        component: homepage
    },
    {
        path: '/searchpage',
        component: searchpage
    },
    {
        path: '/details/:id',
        component: details
    },
    {
        path: '/videopage/:videoid',
        component: videopage
    },
    {
        path: '/history',
        component: history
    },
    {
        path: '/document',
        component: docDescription
    },
    {
        path: '/dam3d',
        component: damModel
    },
    {
        path: '/signin',
        name:'/signin',
        component: login
    },
    {
        path:'/datasetPreview',
        name:'datasetPreview',
        component:datasetPreview
    },
    {
        path:'/datasetInDetail',
        name:'datasetInDetail',
        component:datasetInDetail
    },
    {
        path: '/user',
        name:'AdminInfo',
        component: user
    },
    {
        path:'/twodresult',
        component: twodresult
    },
    {
        path:'/labelPage',
        component: labelPage
    },
    {
        path: '/cifar',
        name:'cifar',
        component: cifar,
        meta:{
            noCache: true,
        }
    },
    {
        path: '/imagenet',
        name:'imagenet',
        component: imagenet,
    },
    {
        path: '/voc',
        name:'voc',
        component: voc,
    },
    {
        path: '/coco',
        name:'coco',
        component: coco,
    },
    {
        path: '/UserQuery',
        name:'UserQuery',
        component: UserQuery,
    },
    {
        path: '/UserImgclassification',
        name:'UserImgclassification',
        component: UserImgclassification,
    },
    {
        path: '/UserImgsegmentation',
        name:'UserImgsegmentation',
        component: UserImgsegmentation,
    },
    {
        path: '/tcav',
        name:'tcav',
        component: tcav,
    },
    {
        path: '/cub',
        name:'cub',
        component: cub,
    },
    {
        path: '/cars',
        name:'cars',
        component: cars,
    },
    {
        path: '/Algorithm',
        name:'Algorithm',
        component: Algorithm,
    }
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