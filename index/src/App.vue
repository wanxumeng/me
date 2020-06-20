<template>
    <div>
        <el-container>
        <el-header>
            <el-row>
                <el-col :span="20" :push="2">
                    <el-menu
                            type="flex"
                            :router="true"
                            justify="end"
                            :default-active="$route.path"
                            class="el-menu-demo"
                            mode="horizontal"
                            @select="handleSelect"
                            background-color="#000000"
                            text-color="#fff"
                            active-text-color="#ffd04b"
                            menu-trigger="click">
                        <el-menu-item index="/">关于我</el-menu-item>
                        <el-menu-item index="/skill">掌握技能</el-menu-item>
                        <el-menu-item index="/products">工作经历</el-menu-item>
                        <el-menu-item index="/item">项目经验</el-menu-item>
                        <el-menu-item index="/concact">联系我</el-menu-item>
                    </el-menu>
                    <img src="./assets/logo.png" alt="" srcset="">
                </el-col>
            </el-row>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer>
            <Footer/>
        </el-footer>
        </el-container>
    </div>

</template>
<script>
import Footer from '@/components/footer'
    export default {
        data() {
            return {
                
            };
        },
       
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        components:{
            Footer
        }
    }
</script>

<style lang="less">
    *{
        margin: 0;
        padding: 0;
    }
    .el-container{
        .el-header{
            width: 100%;
            margin: auto;
            overflow: hidden;
            background-color:#000000;
            img{
                height: 57px;
            }
            .el-menu.el-menu--horizontal{
                float: right;
            }
        }
        .el-footer{
            width: 100%;
            overflow: hidden;
            text-align: center;
            line-height: 60px;
        }
    }
</style>
