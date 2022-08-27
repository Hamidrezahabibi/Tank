<template>
    <div>
        <div>
            <Header />
        </div>
        <div class="d-none d-sm-none d-md-block" style="width: 75%; margin-right: 250px;">
            <img src="../../public/images/desktop-home-price-banner.2cbb64c.png" class="image"/>
        </div>
        <div class="newPhones" style="width: 75%; margin-right: 250px;">
            <h5>جدید ترین گوشی های دارای کارنامه سلامت</h5>
            <hr>
            <NewPhone />
        </div>
        <div class="sellerPhones" style="width: 75%; margin-right: 250px;">
            <h5>محبوب‌ترین گوشی‌ها</h5>
            <hr>
            <SellerPhones />
        </div>
        <div class="brandPhones" style="width: 75%; margin-right: 250px;">
            <h5>برندهای ویژه</h5>
            <hr>
            <BrandPhone />
        </div>
        <div class="postPhones" style="width: 75%; margin-right: 250px;">
            <h5>آگهی ها</h5>
            <hr>
            <PostPhone />
        </div>
    </div>
    
</template>

<script>
import NewPhone from "./phone/NewPhone.vue";
import SellerPhones from "./phone/SellerPhones.vue";
import BrandPhone from "./phone/BrandPhone.vue";
import PostPhone from "./phone/PostPhone.vue";
import Header from "../components/Header.vue";
export default {
    name:"Home",
    components: {
        NewPhone,
        SellerPhones,
        BrandPhone,
        PostPhone,
        Header
    },
}

</script>

<style>
body {
    margin: 0;
    font-family: dana,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    text-align: right;
    direction: rtl;
}
body #app {
    display: flex;
    padding: 0;
    max-width: 100%;
}
.image {
    width: 100%;
    height: 300px;
    margin-bottom: 30px;
    margin-top: 30px;
}
.newPhones {
    margin-bottom: 30px;
}
h5 {
    font-size: 15px;
    font-weight: bold;
}
hr {
    width: 100%;
    color: black;
}
.postPhones {
    margin-top: 20px;
}
</style>