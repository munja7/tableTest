<template lang="pug">
.flight-schedule
	FlightFilter
	FlightTable
	FlightPagination
</template>

<script>
export default {
	name: "FlightSchedule",
	components: {
		FlightFilter: () => import("@/components/FlightFilter.vue"),
		FlightTable: () => import("@/components/FlightTable.vue"),
		FlightPagination: () => import("@/components/FlightPagination.vue"),
	},
	data: ()=>({}),
  methods: {
  }
}
</script>
<style lang="sass">
	.flight-schedule
		display: flex
		flex-direction: column
</style>