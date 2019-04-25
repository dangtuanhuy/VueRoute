<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <myForm/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import myForm from  './components/myForm.vue'
export default {
  name: 'app',
  components: {
    
    myForm

  }
}
</script>

<style>

</style>
