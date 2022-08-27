<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import Header from './components/Header.vue'
</script>

<template>
  <RouterView />
</template>

<style>
html body {
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
</style>
