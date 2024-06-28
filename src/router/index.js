import { createRouter, createWebHistory } from 'vue-router';

import Home from '../vueeee/Home.vue';
import about from '../vueeee/about.vue';
import portfolio from '../vueeee/Portfolio.vue';
import gallery from '../vueeee/Gallery.vue';
import contact from '../vueeee/Contact.vue';

const routes = [//페이지 정보들
   {path: '/', component: Home},
   {path:'/about',component: about},
   {path: '/portfolio', component:portfolio},
   {path: '/gallery', component:gallery},
   {path: '/contact', component:contact},
]

const router = createRouter({
   history: createWebHistory('/'),
   routes,   //routes: routes(위에 상수로 정의한 거)
})

export default router;  //객체이름 라우터. 페이지 이동할 수 있게 해줌. 외부에서 사용할 수 있도록 export