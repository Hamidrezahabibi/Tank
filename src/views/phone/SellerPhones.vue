<template>
	<div class="row gx-1">
		<div v-if="loading" class="spinner-grow text-primary" role="status">
			<span class="sr-only"></span>
		</div>
			
		<div v-else class="col-sm-4 col-md-3 col-lg-2 col-xl-2 px-1 is-selected pb-3" v-for="(sellerPhone,id) in sellerPhones.slice(0,6)" :key="id">
			<CardSellerPhones :sellerPhone="sellerPhone" />
		</div>	
	</div>	
</template>

<script>
	import axios from 'axios'
	import {ref} from 'vue'
	import CardPhone from '@/components/CardPhone.vue'
    import {useRoute} from 'vue-router'
	import CardSellerPhones from '../../components/CardSellerPhones.vue'

	export default {
		components: {
            CardPhone,
            CardSellerPhones
        },
		setup(){
			const sellerPhones = ref([]);
			const loading = ref(true);
            const route = useRoute();
			//console.log(phones.value)
			function getSellerPhones(){
				axios
				.get("https://api.tank.ir/api/v-1.0/market/first-page/")
				.then(function(response){
					sellerPhones.value = response.data.products;
					loading.value = false;
					console.log(sellerPhones.value)
				})		
				.catch(function(error){
					console.log(error);
				});
			}
			getSellerPhones();
			return { 
				sellerPhones,
				loading 
			}
		},
	}
</script>