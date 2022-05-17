<template>
    <div class="app">
        <nav-bar></nav-bar>
        <goods-shop></goods-shop>
        <submit-bar></submit-bar>
    </div>
</template>
<script>
import NavBar from './views/NavBar.vue';
import GoodsShop from './views/GoodsShop.vue';
import SubmitBar from './views/SubmitBar.vue';
export default {
    components: ({
        NavBar,
        GoodsShop,
        SubmitBar
    })
}
</script>
<style lang="scss">
</style>

