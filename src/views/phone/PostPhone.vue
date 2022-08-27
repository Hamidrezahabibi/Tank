<template>
	<div class="row">
		<div v-if="loading" class="spinner-grow text-primary" role="status">
			<span class="sr-only"></span>
		</div>
			
		<div v-else class="col-md-4 col-lg-3 col-xl-2 pb-3 px-2 mt-2" v-for="(post,id) in posts.slice(0,6)" :key="id">
			<CardPostPhone :post="post" />
		</div>	
	</div>
</template>

<script>
	import axios from 'axios'
	import {ref} from 'vue'
	import CardPhone from '@/components/CardPhone.vue'
    import {useRoute} from 'vue-router'
    import CardPostPhone from '../../components/CardPostPhone.vue'

	export default {
		components: {
            CardPhone,
            CardPostPhone
        },
		setup(){
			const posts = ref([]);
			const loading = ref(true);
            const route = useRoute();
			function getPosts(){
				axios
				.get("https://api.tank.ir/api/v-1.0/market/first-page/")
				.then(function(response){
					posts.value = response.data.has_report_posts;
					loading.value = false;
					console.log(posts.value)
				})		
				.catch(function(error){
					console.log(error);
				});
			}
			getPosts();
			return { 
				posts,
				loading 
			}
		},
	}
</script>