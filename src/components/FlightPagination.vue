<template lang="pug">
//- .pagination 
//- 	PaginateBtn(btnText="Назад")
//- 	PaginateBtn(btnText="Вперед")
ul.pagination
	li.pagination__item
		button(type="button" @click="onClickFirstPage" :disabled="isInFirstPage")
			| В начало
	li.pagination__item(v-for="page in pages" :key="page.name")
		button(type="button" @click="onClickPage(page.name)" :disabled="page.isDisabled" :class="{ active: isPageActive(page.name) }")
			| {{ page.name }}
	li.pagination__item
		button(type="button" @click="onClickLastPage" :disabled="isInLastPage")
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
			totalPages: {
				type: Number,
				required: true
			},
			perPage: {
				type: Number,
				required: true
			},
			currentPage: {
				type: Number,
				required: true
			}
  },
	computed: {
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
		isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
	methods: {
    onClickFirstPage() {
      this.$emit('pagechanged', 1);
    },
    onClickPage(page) {
      this.$emit('pagechanged', page);
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages);
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