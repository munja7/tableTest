<template lang="pug">
.filter Table filter
    .filter__content
        FilterSelect
        FilterSelect
        FilterInput
</template>
<script>
export default {
    name: 'FlightFilter',
    components:{
    FilterSelect: () => import("@/components/FilterSelect.vue"),
    FilterInput: () => import("@/components/FilterInput.vue"),
},
}
</script>
<style lang="sass">
    .filter
        background-color: #f2eeed
    .filter__content
        margin: 0 auto
        max-width: 500px
        display: flex 
        justify-content: space-between
</style>