<template>
	<div>
		<div>
			<Header />
		</div>
		<div class="row" style="width: 75%; margin-right: 250px;">
			<div class="sidebar d-none d-lg-block col-lg-3 mt-4" style="padding-right: 0; padding-left: 0;">
				<BoxFilter :queries = "queries"/>
			</div>
			
			<div class="col col-12 col-md-9 mt-2 mt-5">
				<div class="row mr-2">
					<!-- <div v-if="loading" class="spinner-grow text-primary" role="status">
						<span class="sr-only"></span>
					</div> -->
					<div class="col-6 col-lg-4 col-xl-3 px-2 pb-5" style="padding-right: 0; padding-left: 0;" v-for="(post,id) in posts" :key="id">
						<CardPostPhone :post="post" />
					</div>
				</div>	
			</div>
		</div>
	</div>
	
</template>

<script>
	import axios from 'axios'
	import { onMounted, ref, watch} from 'vue'
	import CardPhone from '@/components/CardPhone.vue'
    import CardPostPhone from '../components/CardPostPhone.vue'
	import BoxFilter from '../components/BoxFilter.vue'
	import Header from '../components/Header.vue'
	import {useRoute, useRouter} from 'vue-router'

	export default {
		components: {
			CardPhone,
			CardPostPhone,
			BoxFilter,
			Header
		},
		setup(){
			const posts = ref([]);
			const loading = ref(true);
            const route = useRoute();
			const router = useRouter();
			const queries = route.query
			const URL = "https://api.tank.ir/api/v-1.0/market/post/search/?limit=12&page=1"
			watch(route, () => {
					axios
					.get(URL , {params: route.query})
					.then(function(response){
						posts.value = response.data.posts
						console.log(posts.value)
						loading.value = false;
					})
					.catch(function(error){
						console.log(error);
					})
    
			})
		
			function getPosts(){
					axios
					.get(URL , {params: route.query})
					.then(function(response){
						posts.value = response.data.posts
						console.log(posts.value)
						loading.value = false;
					})		
					.catch(function(error){
						console.log(error);
					});
			}
			getPosts()

			return { 
				posts,
				loading,
				queries
			}
		},
	}
</script>

<style>
.sidebar {
	position: sticky;
}
</style>