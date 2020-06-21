<template>
    <el-carousel :interval="3000" type="card" height="300px">
        <el-carousel-item v-for="item in $store.state.banner" :key="item._id">
            <img :src="'/api/'+item.shopTypePic" alt="" height="100%" @click="click">
<!--            <h3 class="medium">{{ item }}</h3>-->
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
        name: "car",
        data(){
            return{
            }
        },
        created() {
            this.$store.dispatch("getBanner",{keyWord:1})
        },
        methods:{
            click(){
                window.location.href = 'https://www.w3school.com.cn/';
            }
        }
    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>