<template lang="pug">
.btn
	button {{btnText}}
</template>
<script>
export default {
	name: 'PaginateBtn',
	props: {
		btnText: {
        type: String,
        default: () => (""),
        }
	},
}
</script>
<style lang="sass">
    
</style>