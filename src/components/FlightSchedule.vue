<template lang="pug">
.flight-schedule
	FlightFilter
	FlightTable
	FlightPagination(:totalPages="10"
      :perPage="10"
      :currentPage="currentPage"
      @pagechanged="onPageChange")
</template>

<script>
export default {
	name: "FlightSchedule",
	components: {
		FlightFilter: () => import("@/components/FlightFilter.vue"),
		FlightTable: () => import("@/components/FlightTable.vue"),
		FlightPagination: () => import("@/components/FlightPagination.vue"),
	},
	data () {
    return {
      currentPage: 1,
    };
  },
  methods: {
    onPageChange(page) {
      console.log(page)
      this.currentPage = page;
    }
  }
}
</script>
<style lang="sass">
	.flight-schedule
		display: flex
		flex-direction: column
</style>