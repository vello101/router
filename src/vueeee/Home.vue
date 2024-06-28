<template>
   <div>
      <h2>Home Vue</h2>
      <img src="../assets/웰시코기.jpg" alt="">
      <br>
      <button @click="">
         <RouterLink to="/about" >저에 대해 알고싶으신가요?</RouterLink>
      </button>
      <button v-on:click="$router.push('/portfolio')">제 작품을 구경하세요</button>
   </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
   button{
      background: lightcoral;
      border: 0;
      &:nth-of-type(2){
         background: lightcyan;
      }
   }
</style>