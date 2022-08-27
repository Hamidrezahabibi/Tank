<template>
	<div class="phone-card__image">
        <div class="page-cover">
            <img :src="`${sellerPhone.phone_image.url}`"> 
        </div> 
        <div class="phone-card__title">{{sellerPhone.phone_name_en}}</div> 
        <div class="phone-card__subtitle">آگهی {{sellerPhone.id}}</div>
    </div>
</template>

<script>
	export default {
		props: {
			sellerPhone:Object
		},
        setup(props){
            console.log(props.sellerPhone)
        }
	}
</script>

<style>
.phone-card__image {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #e5e5e5;
    padding: 1rem 0.5rem;
    background-color: #f4f4f4;
    margin-bottom: 20px;
}
.page-cover {
    overflow: hidden;
    position: relative;
}
.page-cover img {
    top: 0;
    left: 0;
    width: 100px;
    height: 120px;
    margin-bottom: 10px;
}
.phone-card__title {
    font-family: dana,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    font-size: .85rem;
    font-weight: 500;
    line-height: 1.5;
}


</style>