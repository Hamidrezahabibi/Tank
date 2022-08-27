<template>
    <a class="brand-card__image">
    <div class="brand-page-cover">
        <img :alt="`${brandPhone.slug}`" :src="`${brandPhone.logo}`" class="image">
    </div> 
    </a>
    <div class="text-center text-truncate font-weight-bold">{{brandPhone.name}}</div>
</template>

<script>
	export default {
		props: {
			brandPhone:Object
		},
        setup(props){
            console.log(props.brandPhone)
        }
	}
</script>

<style>
.brand-card__image {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #e5e5e5;
    padding: 3px;
    background-color: #f4f4f4;
    margin-bottom: 5px;
    width: 90px;
    height: 90px;
    columns: 4;
}

.brand-page-cover img {
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
    -o-object-fit: contain;
    object-fit: contain;
    justify-content: center;
    margin-top: 12px;
}   
.page-cover {
    overflow: hidden;
    position: relative;
}

</style>