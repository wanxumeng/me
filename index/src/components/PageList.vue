<template>
    <div class="page">
        <a href="javascript:;"
           v-for="pageNo in pageSum"
           :key="pageNo" @click="$store.dispatch('getLiuyan',{pageIndex:pageNo,limit:8})" :class="{active:pageIndex===pageNo}">{{pageNo}}</a>
    </div>
</template>

<script>
    export default {
        props:["pageSum","pageIndex"],
        name: "PageList"
    }
</script>

<style scoped>

</style>