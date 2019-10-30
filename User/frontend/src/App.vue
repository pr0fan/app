<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/header';
  import Axios from 'axios'
  export default {
    components: {Header}
  };
</script>

<style>
 @import "~materialize-css/dist/css/materialize.min.css";
 
 .router-link-exact-active{
   background-color: rgba(0,0,0,0.1);
 }
</style>
