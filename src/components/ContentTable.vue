<template lang="pug">
table.table
    thead
      tr
        th Дата
        th Название
        th Количетсво
        th Расстояние
        <!-- th(v-for="row in rows",@click="sortBy(row)") {{ changeKeyNmae(row) }}
          span(class="arrow", :class="reverse ? 'asc' : 'dsc'", v-if="sortKey==row") -->
    tbody
      tr(v-for="n in 10")
        td {{date}}
        td Lorem ipsum dolor 
        td Lorem ipsum dolor sit amet 
        td Lorem ipsum dolor sit amet 
</template>
<script>
export default {
    name: 'ContentTable',
    data(){
        return{
            
        }
    },
    computed:{
        date(){
            return new Date().toLocaleDateString();
        }
    }
}
</script>
<style lang="sass">
    .table
        margin: 0 auto
        margin-top: 10px
        background-color: #eaf0f2
</style>