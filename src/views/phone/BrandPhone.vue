<template>
	<div class="row gx-1">
		<div v-if="loading" class="spinner-grow text-primary" role="status">
			<span class="sr-only"></span>
		</div>
		
		<div class="col-4 col-sm-4 col-md-2 col-xl-1 col-xs-12 pb-3 px-2" v-for="(brandPhone,id) in brandPhones.slice(0, 12)" :key="id">
				<CardBrandPhone :brandPhone="brandPhone" />
		</div>	
	</div>
   
</template>

<script>
	import axios from 'axios'
	import {ref} from 'vue'
	import CardPhone from '@/components/CardPhone.vue'
    import {useRoute} from 'vue-router'
    import CardSellerPhones from '../../components/CardSellerPhones.vue'
    import CardBrandPhone from '../../components/CardBrandPhone.vue'

	export default {
		components: {
			CardPhone,
			CardSellerPhones,
			CardBrandPhone
		},
		setup(){
			const brandPhones = ref([]);
			console.log(brandPhones)
			const loading = ref(true);
            const route = useRoute();
			//console.log(phones.value)
			function getbrandPhones(){
				axios
				.get("https://api.tank.ir/api/v-1.0/market/first-page/")
				.then(function(response){
					brandPhones.value = response.data.brands;
					loading.value = false;
					console.log(brandPhones.value)
				})		
				.catch(function(error){
					console.log(error);
				});
			}
			getbrandPhones();
			return { 
				brandPhones,
				loading 
			}
		},
	}
</script>

<style>

</style>