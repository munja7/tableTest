<template lang="pug">
div.home
  img(alt="Vue logo" src="../assets/logo.png")
  img(alt="table" src="../assets/table.png")
  TableFilter
  ContentTable
  HelloWorld(msg="Welcome to Your Vue.js App")
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import TableFilter from '@/components/TableFilter.vue'
import ContentTable from '@/components/ContentTable.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    TableFilter,
    ContentTable
}
}
</script>
