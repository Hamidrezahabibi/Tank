<template>
	<div class="card p-1">
        <div class="page-cover">
            <img :src="`${phone.phone_image.url}`" />
        </div>
    </div>
    <div class="card p-1">
        <div class="post-title mt-2">{{phone.phone_name_fa}}</div>
        <!-- <p class="price" style="color: grey; font-size: 15px; direction: ltr;">{{phone.price}}</p> -->
        <!-- <p>{{post.created_at}}</p> -->
    </div>    
</template>

<script>
	export default {
		props: {
			phone:Object
		},
        setup(props){
            console.log(props.phone)
        }
	}
</script>
<style scoped>
.card {
  max-width: 300px;
  max-height: 203px;
  border-radius: 0;
}
.page-cover {
    overflow: hidden;
    position: relative;
    margin-right: auto;
    margin-left: auto;
}
.page-cover img {
    top: 0;
    left: 0;
    width: 130px;
    height: 150px;
    margin-top: 10px;
    margin-bottom: 10px;
    
}
.post-title{
    font-family: dana,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    font-size: .85rem;
    font-weight: 500;
    line-height: 1.5;
}

</style>