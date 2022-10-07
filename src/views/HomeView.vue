<template lang="pug">
.home
  .home__container 
    img(alt="table" src="../assets/table.png")
    FlightSchedule
    HelloWorld(msg="Welcome to Your Vue.js App")
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    HelloWorld: () => import("@/components/HelloWorld.vue"),
    FlightSchedule: () => import("@/components/FlightSchedule.vue"),
}
}
</script>

<style lang="sass">
@import '../common/index'

.home
  width: 100%
  background-color: $background-primary

.home__container 
  width: 100%
  max-width: 1000px
  margin: 0 auto
  background-color: red
</style>
