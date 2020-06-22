<template>
    <div>
        <car></car>
        <div>
            <template>
                <div class="demo-fit" style="margin:auto,width:200px">
                    <div class="block">
                        <el-avatar shape="square"  fit="cover" >
                            <img :src="'/api/'+$store.state.heads.shopTypePic" alt="">
                        </el-avatar>
                    </div>
                </div>
            </template>
            <main class="pages">
                <section>
                    <h1 class="f-s-18 f-w-900 m-b-20">联系方式</h1>
                    <div class="boxes default m-b-20">
                    <div class="box bg-gray-lightest p-t-0 p-b-0">
                        <div class="row">
                        <div class="col-4 p-t-10 p-b-10">● 手机：{{$store.state.ruleForm.phone}}</div>
                        <div class="col-4 p-t-10 p-b-10 border">● Email：{{$store.state.ruleForm.Email}}</div>
                        <div class="col-4 p-t-10 p-b-10 border">● 网站：{{$store.state.ruleForm.website}}</div>
                        </div>
                    </div>
                    </div>
                </section>
                <section>
                    <h1 class="f-s-18 f-w-900 m-b-20">个人信息</h1>
                    <div class="boxes default m-b-20">
                        <div class="box bg-gray-lightest p-t-0 p-b-0">
                            <div class="row">
                                <div class="col-4 p-t-10 p-b-10">● {{$store.state.ruleForm.name}} | {{$store.state.ruleForm.radio | sex}}| {{$store.state.ruleForm.age}}</div>
                                <div class="col-4 p-t-10 p-b-10 border">● {{$store.state.ruleForm.recode}} | {{$store.state.ruleForm.school}} | {{$store.state.ruleForm.zy}}</div>
                                <div class="col-4 p-t-10 p-b-10 border">● {{$store.state.ruleForm.zgsc}} | {{$store.state.ruleForm.zw}}</div>
                            </div>
                            <div class="row">
                                <div class="col-4 p-t-10 p-b-10">● 期望职位：{{$store.state.ruleForm.zw}}</div>
                                <div class="col-4 p-t-10 p-b-10 border">● 期望城市：{{$store.state.ruleForm.cs}}</div>
                            </div>
                        </div>
                        <div class="box bg-gray-lightest">
                            ● Github：
                            <a :href="$store.state.ruleForm.github" target="_blank">{{$store.state.ruleForm.github}}</a>
                        </div>
                        <div class="box bg-gray-lightest">
                            ● 个人网站：
                            <a :href="'http://'+$store.state.ruleForm.website" target="_blank">{{$store.state.ruleForm.website}}</a>
                        </div>
                    </div>
                </section>
                <section>
                    <h1 class="f-s-18 f-w-900 m-b-20">开源项目</h1>
                    <div class="boxes default m-b-20">
                        <div class="box bg-gray-lightest">
                            ●
                            <a :href="$store.state.ruleForm.github" target="_blank"> 个人网站 - 使用  + vue + vuex + elementUI + axios 构建的个人网站，个人简历、文章及留言版展示</a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>
</template>

<script>
    import car from "@/components/car"
    export default {
        name: "Home",
        components:{
            car
        },
        data(){
            return {
                 sexs:{1:"男",2:"女"},
            }
        },
        filters:{
            sex(v){
                if(v==="1"){
                    return "男"
                }else{
                    return "女"
                }
            }
        },
         mounted() {
            this.$store.dispatch("getForm");
        },
        created() {
            
        },
        beforeCreate() {
            this.$store.dispatch("gethead",{keyWord:3});
        },
    }
</script>

<style scoped lang="less">
    .el-avatar{
        display: block;
        margin: 20px auto;
        width: 150px;
        height: 200px;
    }
    .pages {
        max-width: 1000px;
        margin: 20px auto;
        padding: 20px;
        box-shadow: 1px 1px 8px rgba(0, 0, 0, .15);
        background-color: #fff;
        color: #3f1c1c;
        font-size: 14px;

        .m-b-20 {
            margin-bottom: 20px !important;
        }

        .f-s-18 {
            font-size: 18px !important;
        }

        .f-w-900 {
            font-weight: 900 !important;
        }

        .boxes.default {
            // border-color: #ddd;
        }

        .boxes>.box:last-child {
            border-bottom-left-radius: 3px !important;
            border-bottom-right-radius: 3px !important;
        }

        .boxes>.box:first-child {
            border-top-left-radius: 3px !important;
            border-top-right-radius: 3px !important;
        }

        .boxes>.box {
            border-width: 0;
            border-radius: 0;
            margin-bottom: 0;
            // border-bottom: 1px solid #ddd;
        }
        .boxes > .box:last-child{
            border-bottom: none;
        }

        .bg-gray-lightest {
            background-color: #F7F3EE;
        }

        .p-b-0 {
            padding-bottom: 0px !important;
        }

        .p-t-0 {
            padding-top: 0px !important;
        }

        .box {
            padding: 10px 15px;
            margin-bottom: 15px;
            // border: 1px solid #ddd;
            border-radius: 4px;
            background-color: #fff;
        }

        .row {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            margin-left: -15px;
            margin-right: -15px;
        }

        .boxes {
            border: 2px solid transparent;
            border-radius: 5px;
            margin-bottom: 15px;
        }

        h1 {
            margin-left: -20px;
            padding-left: 15px;
            border-left: 5px solid #e38fa9;
            text-align: left;
            font-size: 14px;
        }

        .border {
            position: relative;
        }

        .border:before {
            content: '';
            position: absolute;
            top: 0;
            left: -2px;
            width: 2px;
            height: 100%;
            // background: #ddd;
            // border-left: 2px solid #ddd !important;
        }

        .col,
        .col-1,
        .col-2,
        .col-3,
        .col-4,
        .col-5,
        .col-6,
        .col-7,
        .col-8,
        .col-9,
        .col-10,
        .col-11,
        .col-12 {
            position: relative;
            width: 100%;
            min-height: 1px;
            padding-left: 15px;
            padding-right: 15px;
        }

        section a {
            color: #666;
        }

        section a:hover {
            color: #333;
            text-decoration: underline;
        }

        .p-b-10 {
            padding-bottom: 10px !important;
        }

        .p-t-10 {
            padding-top: 10px !important;
        }
        .flex-p{
            display: flex;
            flex:1;
        }
        p.flex-p span:first-child {
            color: #d56386;
            min-width: 5em;
        }
        .border {
            position: relative;
        }

        .bg-gray-lightest {
            background-color: #f5f5f5;
        }

        @media (min-width: 576px) {
            .col-4 {
                -webkit-box-flex: 0;
                -ms-flex: 0 0 33.33333%;
                flex: 0 0 33.33333%;
                max-width: 33.33333%;
            }
        }

    }
</style>