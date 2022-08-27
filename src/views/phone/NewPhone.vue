<template>
	<div class="row gx-1">
		<div v-if="loading" class="spinner-grow text-primary" role="status">
			<span class="sr-only"></span>
		</div>
		
		<div v-else class="col-md-4 col-lg-3 col-xl-2 pb-3 px-1 mt-2" v-for="(phone,id) in phones.slice(0,6)" :key="id">
				<CardPhone :phone="phone" />
		</div>	
	</div>
   
</template>

<script>
	import axios from 'axios'
	import {ref} from 'vue'
	import CardPhone from '@/components/CardPhone.vue'
    import {useRoute} from 'vue-router'

	export default {
		components: {
			CardPhone
		},
		setup(){
			const phones = ref([]);
			const loading = ref(true);
            const route = useRoute();
			console.log(phones.value)
			function getPhones(){
				axios
				.get("https://api.tank.ir/api/v-1.0/market/first-page/")
				.then(function(response){
					phones.value = response.data.phones;
					loading.value = false;
					console.log(phones.value)
				})		
				.catch(function(error){
					console.log(error);
				});
			}
			getPhones();
			return { 
				phones,
				loading 
			}
		},
	}
</script>