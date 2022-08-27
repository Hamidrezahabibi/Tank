<template>
    
            <div class="card p-1">
                <div class="page-cover">
                    <img :src="`${post.phone.media}`"  />
                </div>
            </div>
            <div class="card p-1">
                <div class="post-title mt-2 mb-1">{{post.title}}</div>
                <p class="price">
                    <span class="bi bi-toman"></span>
                    {{priceData}}
                    </p>
                <p>{{post.created_at}}</p>
            </div>    			
    
</template>

<script>
    import {ref} from 'vue'
	export default {
		props: {
			post:Object
		},
        setup(props){
            var priceData = ref("")
            var price = props.post.price
            const priceInfo = () => {
                if(price === null){
                    priceData = "توافقی"
                } else {
                    priceData = price.toLocaleString('fa-IR')
                }
            }
            priceInfo()
            return{ priceData }
        }
	}
</script>

<style scoped>
.card {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  max-width: 300px;
  border-radius: 0;
  box-sizing: content-box;
  width: 100%;  
  float: left;
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
    font-size: 1rem;
    font-weight: 500;
    height: 3rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 0;
}
.price {
    font-family: dana,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    font-size: .85rem;
    font-weight: 500;
    line-height: 1.5;
    direction: ltr;
}
</style>