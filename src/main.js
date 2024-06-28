import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //파일 이름을 index라 쓰면 폴더 연결만 해도 폴더 안 파일 인식

createApp(App).use(router).mount('#app')  //app 전체에 router 같이 쓸 거란 의미
