<template lang="pug">
table.table(v-if="flights")
    thead
      tr
        th Дата
        th Название
        th Количетсво
        th Расстояние
        //-  th(v-for="row in rows",@click="sortBy(row)") {{ changeKeyNmae(row) }}
        //-   span(class="arrow", :class="reverse ? 'asc' : 'dsc'", v-if="sortKey==row") 
    tbody
      tr(v-for="flight in flights")
        td {{flight.date}}
        td {{flight.name}} 
        td {{flight.amount}} 
        td {{flight.distance}} 
</template>
<script>
export default {
    name: 'FlightTable',
    data: ()=>({}),
    computed:{
        date(){
            return new Date().toLocaleDateString();
        },
        flights(){
            return this.$store.state.data;
            // return this.$store.getters.getFlights;
        },
    },
}
</script>
<style lang="sass">
    .table
        margin: 0 auto
        margin-top: 10px
        background-color: #eaf0f2
</style>