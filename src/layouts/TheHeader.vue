<template>
   <header>
      <h1>헤더입니다!!</h1>
      <ul class="nav">
         <li><RouterLink to="/">Home</RouterLink></li>
         <!-- RouterLink 부드럽게 가져옴 -->
         <li><a href="/about">About me</a></li>
         <!-- a태그는 새로고침하면서 가져옴 -->
         <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>
         <li><span @click="$router.push('/gallery')">Gallery(내장라우트 객체 이용)</span></li>
         <li><button @click="gogo">Contact</button></li>
      </ul>
   </header>
</template>
 
<script setup>
import {useRouter} from 'vue-router'
const rr = useRouter()  //route 객체
const gogo = ()=>{
   rr.push('/contact');
}
</script>
 
<style lang="scss" scoped>
header {
   max-width: 1000px;
   margin: auto;
   display: flex;

   .nav {
      display: flex;
      list-style: none;
      align-items: center;

      li {
         margin-right: 20px;
      }
   }
}
</style>