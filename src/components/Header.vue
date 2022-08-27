<template>
<div class="header-desktop">
    <header class="d-flex flex-column h-100 justify-content-between" style="margin-right: 250px; margin-left: 260px;">
        <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center flex-grow-1">
                <a href="/">
                    <img alt="tank" width="130" src="../../public/images/logo.svg" class="tankLogo">
                </a> 
                <div class="header-search">
                    <div class="header-search__wrapper">
                        <div class="header-search__container col-8">
                            <div class="header-search__form">
                                <input type="text"  placeholder="جستجو در تانک ..." v-model="outputValueOnEnter" @keyup.enter="search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </div>
                        </div> 
                    </div>
                </div>
            </div> 
            <div class="header-buttons">
                <a href="#" class="text-primary">
                    ورود/ثبت‌نام         
                </a> 
                <a href="#">
                    <i class="bi-cart bi"></i>
                </a>
            </div>
        </div>
        <div class="d-flex align-items-center justify-content-between">
            <nav class="nav">
                <ul>
                    <li>
                        <div class="d-flex">
                            <a href="/advertising" class="text-decoration-none">
                                آگهی‌های تانک
                            </a> 
                        </div>
                    </li>
                    <li>
                        <div class="d-flex">
                            <a class="text-decoration-none">
                                قیمت گوشی   
                            </a>
                        </div>
                    </li>
                </ul>
            </nav> 
        </div>
    </header>
</div>    
</template>

<script>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
    setup(){
        const route = useRoute();
        const router = useRouter();
        const outputValueOnEnter = ref('')
        const search = (() => {
            if (outputValueOnEnter.value === ''){
                router.push({
                    name: 'advertising',
                    query: {
                        ...route.query,
                        search_phrase: outputValueOnEnter.value,
                    }
                })
            } else {
                router.push({
                    name: 'advertising',
                    query: {
                        ...route.query,
                        search_phrase: outputValueOnEnter.value
                    }
                })
            }
            
        })

        return {
            outputValueOnEnter,
            search
        }
    }
}
</script>

<style>
.header-desktop {
    font-family: dana,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    height: 7rem;
    padding: 0.5rem 0 0;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
}

.header-search {
    width: 100%;
    padding: 0 1rem;
    flex-grow: 1;
    height: 3rem;
}
.header-search__wrapper {
    width: 100%;
    position: relative;
}
.header-search__container {
    width: 100%!important;
    z-index: 1002;
    transition: padding .3s ease;
    position: absolute;
    top: 0;
    right: 0;
}
.header-search__form {
    height: 3rem;
    background: #f4f4f4;
    padding-right: 3px;
    position: relative;
    width: 700px;
    border: 1px solid #f4f4f4;
}
.header-search__form input {
    background: #f4f4f4;
    border: 1px solid #f4f4f4;
    margin: 6px;
    width: 300px;
}
.header-search__form input:focus {
    outline: none !important;
    border-color: #f4f4f4;
}
.header-search__form svg {
    margin-right: 350px;
}
.nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
}
.nav>ul>li>div>a {
    font-family: dana,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5;
    padding: 14px;
    color: #161616;
    color: var(--gray-100);
    position: relative;
}

.btn-outline-light {
    border: 1px solid white;
    color:#000;
    background-color: #fff;
    width: 10px;
    margin-right: -10px;
}
.nav ul {
    padding-right: 5px;
}
.nav ul li {
    list-style: none;
    display:inline-block;
}
.nav>ul>li>div>a:hover {
    background:  #fff;
}
.line {
    background: #e5e5e5;
    border-radius: 0.25rem;
    border: 1px solid #e5e5e5;
    height: 18px;
}

</style>