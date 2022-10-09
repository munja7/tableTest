<template lang="pug">
//- .pagination 
//- 	PaginateBtn(btnText="Назад")
//- 	PaginateBtn(btnText="Вперед")
section
  ul.pagination
    li.pagination__item
      button(type="button" @click="onPageChange(1)" :disabled="page === 'first'")
        | В начало
    li.pagination__item(v-for="page in pages" :key="page.name")
      button(type="button" @click="onPageChange(page.name)" :disabled="page.isDisabled" :class="{ active: isPageActive(page.name) }")
        | {{ page.name }}
    li.pagination__item
      button(type="button" @click="onPageChange(totalPages)" :disabled="page === 'last'")
        | В конец
</template>

<script>
import PaginateBtn from './PaginateBtn.vue';
export default {
    name: "FlightPagination",
    components: { PaginateBtn },
		props: {
			maxVisibleButtons: {
				type: Number,
				required: false,
				default: 3
			},    
  },
  created(){
    console.log('this.GET_FLIGHTS_FROM_DB');
    this.$store.dispatch('GET_FLIGHTS_FROM_DB', {from: 0, to: this.perPage -1});
    },
  data: ()=>({
    currentPage: 1,
  }),
	computed: {
    totalPages(){
      return this.$store.getters.getTotalPages;
    },
    perPage(){
      return this.$store.state.perPage;
    },
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1;
      }

      // When on the last page
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons;
      }

      // When inbetween
      return this.currentPage - 1;
    },
    pages() {
      const range = [];

      for (
        let i = this.startPage;
        i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage
        });
      }

      return range;
    },
    page(){
      return this.currentPage === 1 ? 'first' : this.currentPage === this.totalPages ? 'last' : '';
    },
  },
	methods: {
    onPageChange(page) {
      console.log(page)
      this.$store.dispatch('GET_FLIGHTS_FROM_DB', {from: (page - 1) * this.perPage, to: (page - 1) * this.perPage + this.perPage });
      this.currentPage = page;
    },
		isPageActive(page) {
      return this.currentPage === page;
    }
  },
}
</script>

<style lang="sass">
	// .pagination
	// 	display: flex

.pagination 
	list-style-type: none

.pagination__item 
	display: inline-block

.active 
	background-color: #4AAE9B
	color: #ffffff

</style>