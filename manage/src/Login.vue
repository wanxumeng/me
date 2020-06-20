<template>
    <div>
        <el-form :model="adminForm" :rules="rules" ref="adminForm" class="demo-adminForm">
            <h3>个人简历后台管理系统</h3>
            <el-form-item prop="adminName">
                <el-input v-model="adminForm.adminName" placeholder="请输入管理员账号"></el-input>
            </el-form-item>
            <el-form-item prop="passWord">
                <el-input type="password" v-model="adminForm.passWord" placeholder="请输入管理员密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button style="width:100%" :loading="$store.state.isLoading" type="primary" @click="submitForm">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                adminForm:{
                    adminName:'',
                    passWord: ''
                },
                rules:{
                    adminName: [
                        { required: true, message: '请输入管理员账号', trigger: 'blur' },
                        { min: 5, max: 8, message: '长度在 5 到 8 个字符', trigger: 'blur' }
                    ],
                    passWord: [
                        { required: true, message: '请输入管理员密码', trigger: 'blur' },
                        { min: 5, max: 8, message: '长度在 5 到 8 个字符', trigger: 'blur' }
                    ],
                }
            }
        },
        methods:{
            submitForm(){
                this.$refs.adminForm.validate((valid)=>{
                    if(valid){
                        this.$store.dispatch("login",this)
                    }else{
                        this.$message.error('请输入完整的信息');
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .demo-adminForm{
        background: #fefefe;
        border:1px solid #eaeaea;
        width: 350px;
        margin: 180px auto;
        padding: 10px 20px;
        -moz-box-shadow:-1px 0px 11px #333333; -webkit-box-shadow:-1px 0px 11px #333333; box-shadow:-1px 0px 11px #333333;
        h3{
            text-align: center;
            margin: 20px;
        }
    }
</style>