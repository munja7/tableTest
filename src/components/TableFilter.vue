<template lang="pug">
.filter Table filter
    .filter__content
        FilterSelect
        FilterSelect
        FilterInput
</template>
<script>
import FilterSelect from './FilterSelect.vue';
import FilterInput from './FilterInput.vue';

export default {
    name: 'TableFilter',
    components:{
    FilterSelect,
    FilterInput
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