<template lang="pug">
.filter Table filter
    .filter__content
        FilterSelect(:selectOptions="selectColumnOptions" name="column")
        FilterSelect(:selectOptions="selectCriteriaOptions" name="criteria")
        FilterInput
        button(@click="filter") Применить фильтр
</template>
<script>
export default {
    name: 'FlightFilter',
    components:{
    FilterSelect: () => import("@/components/FilterSelect.vue"),
    FilterInput: () => import("@/components/FilterInput.vue"),
},
data(){
    return{
        selectColumnOptions:['Дата', 'Название', 'Количество', 'Расстояние'],
        selectCriteriaOptions:['Равно', 'Больше', 'Меньше', 'Содержит'],
    }
},
methods:{
    filter(){

    }
}
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