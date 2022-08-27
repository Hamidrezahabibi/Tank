<template>
        
                    <div class="filter-item">
                        <div  class="tc-collapse">
                            <div class="tc-collapse__header">
                                <div class="d-flex justify-content-between w-100 px-1 py-1">
                                    <div class="d-flex">
                                        <div id="accordion">
                                                <div class="card-header" id="headingOne" style="background-color:white;">
                                                    <h5 class="mb-0">
                                                        <span class="title1">مقدار رم</span>
                                                        <button class="btn1 btn-outline-light" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                                                                <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                                                            </svg>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                    <div class="card-content">
                                                        <div class="tc-collapse__content" style="animation-fill-mode: both; animation-timing-function: ease-out;"> 
                                                            <div class="mt-2">
                                                                <div class="collapse-item">
                                                                    <input type="tel" placeholder="انتخاب "> 
                                                                    <i class="bi-search my-auto"></i>
                                                                </div> 
                                                                <div class="items">
                                                                    <div><!----></div>
                                                                    <div><!----></div>
                                                                    <div><!----></div>
                                                                    <div><!----></div>
                                                                    <div><!----></div> 
                                                                    <div>
                                                                         <div class="item">
                                                                            <input id="ram2GB" type="checkbox" class="my-auto col-1 pointer" value="2GB" v-model="checkedRAM"> 
                                                                            <label for="ram2GB"> 2 گیگابایت </label>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div class="item">
                                                                            <input id="ram3GB" type="checkbox" class="my-auto col-1 pointer" value="3GB" v-model="checkedRAM"> 
                                                                            <label for="ram3GB"> 3 گیگابایت </label>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div class="item">
                                                                            <input id="ram4GB" type="checkbox" class="my-auto col-1 pointer" value="4GB" v-model="checkedRAM"> 
                                                                            <label for="ram4GB"> 4 گیگابایت </label>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div class="item">
                                                                            <input id="ram6GB" type="checkbox" class="my-auto col-1 pointer" value="6GB" v-model="checkedRAM"> 
                                                                            <label for="ram6GB"> 6 گیگابایت </label>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div class="item">
                                                                            <input id="ram8GB" type="checkbox" class="my-auto col-1 pointer" value="8GB" v-model="checkedRAM"> 
                                                                            <label for="ram8GB"> 8 گیگابایت </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>    
                    </div>
                    </div>
                    <div class="filter-item">
                        <div>
                            <div class="tc-collapse">
                                <div class="tc-collapse__header">
                                    <div class="d-flex justify-content-between w-100 px-1 py-1">
                                        <div class="d-flex">
                                            <div id="accordion">
                                                <div class="card-header" id="headingTwo" style="background-color:white;">
                                                    <h5 class="mb-0">
                                                        <span class="title2">محدوده قیمت گوشی</span> 
                                                        <button class="btn2 btn-outline-light" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                                                            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                                                            </svg>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
                                                    <div class="card-content">
                                                        <div class="tc-collapse__content" data-old-padding-top="" data-old-padding-bottom="" data-old-overflow="" style="animation-fill-mode: both; animation-timing-function: ease-out;"> 
                                                            <div class="mb-4 mt-2">
                                                                <div class="px-3 py-2">
                                                                    <div class="track-container">
                                                                        <div class="price">
                                                                            <div class="d-flex">
                                                                                <span class="my-auto">از</span> 
                                                                                <span class="range-value min">{{ state.range[0] }}</span>
                                                                            </div> 
                                                                            <div class="d-flex">
                                                                                <span class="my-auto mx-3">تا</span> 
                                                                                <span class="range-value max">{{ state.range[1] }}</span>
                                                                            </div>
                                                                        </div> 
                                                                        <div class="track-chart">
                                                                            <div class="track"></div> 
                                                                            <!-- <div class="track-highlight" style="left: 0%; width: 100%;"></div> -->
                                                                            <!-- <input id="multi6" class="multi-range" type="range" /> -->
                                                                            <!-- <button class="track-btn track1" style="left: 0%;" @mouseover="drak"></button> 
                                                                            <button class="track-btn track2" style="left: 100%;"></button> -->
                                                                            <VueSimpleRangeSlider
                                                                                style="width: 250px"
                                                                                :min="0"
                                                                                :max="30000000"
                                                                                exponential
                                                                                v-model="state.range"
                                                                            >
                                                                            
                                                                            </VueSimpleRangeSlider>
                                                                            <button class="btn btn-outline-secondary mt-5" @click="filter">اعمال محدوده</button>
                                                                        </div>
                                                                    </div> 
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>        
                                </div>
                            </div>
                        </div>
                    </div>  
                
</template>

<script>
	import { ref, reactive, watch, onMounted } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import VueSimpleRangeSlider from "vue-simple-range-slider";
    import "vue-simple-range-slider/css";

	export default {
		components: {
            VueSimpleRangeSlider 
            //Filtering
        },
        props : {
            queries: {
                type: Object,
                required: true
            }
        },
		setup(props){
            const route = useRoute();
			const router = useRouter();
            const checkedRAM = ref([])
            const state = reactive({ range: [0, 30000000], number: 10 });
            const ramValues = ref("")

            // ---Refresh and show filter---
           
            onMounted (() => {
                if (props.queries.ram_values !== undefined){
                    checkedRAM.value= props.queries.ram_values.split(',')
                } 
                if(props.queries.price_from && props.queries.price_to) {
                    state.range[0]= props.queries.price_from
                    state.range[1]= props.queries.price_to
                }
            })
            
            // ---Query ftlter ram value---
            
            watch (checkedRAM, () => {
                    // for (let index = 0; index < checkedRAM.value.length; index++) {
                    //     ramValues.value = checkedRAM.value[index] + ",";
                    // }
                    if(checkedRAM.value.length === 1){
                        ramValues.value = checkedRAM.value[0]
                    } else if (checkedRAM.value.length === 2){
                        ramValues.value = checkedRAM.value[0] + ',' + checkedRAM.value[1]
                    } else if (checkedRAM.value.length === 3){
                        ramValues.value = checkedRAM.value[0] + ',' + checkedRAM.value[1] + ',' + checkedRAM.value[2]
                    } else if (checkedRAM.value.length === 4){
                        ramValues.value = checkedRAM.value[0] + ',' + checkedRAM.value[1] + ',' + checkedRAM.value[2] + ',' + checkedRAM.value[3]
                    } else if (checkedRAM.value.length === 5){
                        ramValues.value = checkedRAM.value[0] + ',' + checkedRAM.value[1] + ',' + checkedRAM.value[2] + ',' + checkedRAM.value[3] + ',' + checkedRAM.value[4]
                    }
                    router.push({
                        name: 'advertising',
                        query: {
                            ...route.query,
                            ram_values: ramValues.value
                        }
                    })
            })
            
            // ---Query filter limited price---
			const filter = () => {
				router.push({
                    name: 'advertising',
                    query: {
                        ...route.query,
                        price_from: state.range[0],
                        price_to: state.range[1],
                    }
                })
			}
			

			return { 
                checkedRAM,
				filter,
                state
			}
		},
	}
</script>

<style>
.tc-collapse {
    width: 100%;
}
.card-header {
    width: 280px ;
    padding: 3px;
    background-color: #f4f4f4;
}
.card-header .title1 {
    right: 0%;
}
.card-header .title2 {
    right: 0%;
}
.card-content {
    width: 90%;
    flex: 1 1 auto;
    min-height: 1px;
    padding: -1.75rem;
}
.tc-collapse .tc-collapse__header {
    cursor: pointer;
}
.tc-collapse .tc-collapse__header span {
    font-size: 1rem;
    font-weight: 500;
}
.tc-collapse .tc-collapse__content {
    transition: all .3s ease;
    padding: 2px;
}
.filter-item .collapse-item {
    color: #8d8d8d!important;
    display: flex;
    background-color: #fff!important;
    margin-top: 0.5rem;
    justify-content: space-between;
}
.collapse-item input {
    border: 1px solid #f4f4f4!important;
    padding: 0.4rem!important;
    width: 305px;
}
.filter-item .items {
    border: 1px solid #f4f4f4;
    margin-top: 0.3rem;
    margin-bottom: 1.5rem;
    color: #6c6c6c;
    height: 170px;
    overflow-y: scroll;
}
.filter-item .items .item {
    display: flex;
    font-size: .875rem!important;
    padding: 0.6rem 0.3rem 0.7rem 0;
    border-bottom: 1px solid #f4f4f4;
}
.filter-item .items .item span {
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    font-size: .875rem!important;
    padding: 0.6rem 0.3rem 0.7rem 0;
    border-bottom: 1px solid #f4f4f4;
}
.track-container {
    cursor: pointer;
    padding-top: 1rem;
}
.price {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 2.5rem;
    font-size: .675rem;
}
.range-value.min {
    left: 0;
}
.price .range-value {
    font-size: 1rem;
    font-weight: 500;
    background-color: #f4f4f4;
    width: 100px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.track-chart .track-container {
    position: relative;
}
.track-highlight, .track {
    display: block;
    position: absolute;
    width: 100%;
    height: 0.2rem;
}
.track-btn {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    cursor: pointer;
    display: block;
    position: absolute;
    width: 1rem;
    height: 1rem;
    top: -5px;
    margin-left: -1rem;
    border: none;
    border-radius: 50%;
    touch-action: pan-x;
    transition: transform .3s ease-out,box-shadow .3s ease-out,background-color .3s ease;
}
.track-btn, .track-highlight {
    background-color: #000;
    z-index: 2;
}
.track-highlight {
    background-color: #000;
    z-index: 2;
}
.btn-outline-light {
    border: 1px solid white;
    color:#000;
    background-color: #fff;
}
svg {
    color: #000;
}
.btn1 {
    margin-right: 153px;
}
.btn2 {
    margin-right: 73px;
}
</style>