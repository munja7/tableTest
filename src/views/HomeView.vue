<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <img alt="table" src="../assets/table.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
