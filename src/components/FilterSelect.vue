<template lang="pug">
.filter-select Filter Select
    select(v-model="selectValue" :name="name" @change="selectHandler()")
        option(v-for="(item, index) in selectOptions", :key="index") 
            | {{item}}
</template>
<script>
export default {
    name: 'FilterSelect',
    props:{
        selectOptions:{
            type: Array,
            default: ()=>([]),
        },
        name:{
            type: String,
            default:()=>(''),
        }
    },
    data: ()=>({
        selectValue: '',
    }),
    methods:{
        selectHandler(){
            this.name === 'column' ? this.$store.commit('set_filterColumn', this.selectValue) : this.$store.commit('set_filterCriteria', this.selectValue);
        }
    }
}
</script>
<style lang="">
    
</style>