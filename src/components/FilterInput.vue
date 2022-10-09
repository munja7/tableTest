<template lang="pug">
.filter-input Filter Input
    input(v-model.lazy.trim="value" type="text", placeholder="введите значение" @blur="inputHandler")
</template>
<script>
export default {
    name: 'FilterInput',
    data(){
        return{
            value: '',
        }
    },
    methods:{
        inputHandler(){
            this.$store.commit('set_filterValue', this.value)
        }
    }
}
</script>
<style lang="">
    
</style>