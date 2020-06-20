<template>
<el-dialog title="修改信息" :visible="dialogFormVisible" @update:visible="bol=>$emit('update:dialogFormVisible',bol)">
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="手机" prop="phone">
    <el-input v-model="ruleForm.phone"></el-input>
  </el-form-item>
  <el-form-item label="Email" prop="Email">
    <el-input v-model="ruleForm.Email"></el-input>
  </el-form-item>
  <el-form-item label="网站" prop="website">
    <el-input v-model="ruleForm.website"></el-input>
  </el-form-item>
  <el-form-item label="姓名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="性别" prop="name">
    <template>
        <el-radio v-model="ruleForm.radio" label="1">男</el-radio>
        <el-radio v-model="ruleForm.radio" label="2">女</el-radio>
    </template>
  </el-form-item>
  <el-form-item label="出生日期" prop="age">
    <el-input v-model="ruleForm.age"></el-input>
  </el-form-item>
  <el-form-item label="学历" prop="recode">
    <el-input v-model="ruleForm.recode"></el-input>
  </el-form-item>
  <el-form-item label="学校" prop="school">
    <el-input v-model="ruleForm.school"></el-input>
  </el-form-item>
  <el-form-item label="专业" prop="zy">
    <el-input v-model="ruleForm.zy"></el-input>
  </el-form-item>
  <el-form-item label="工作时长" prop="zgsc">
    <el-input v-model="ruleForm.zgsc"></el-input>
  </el-form-item>
  <el-form-item label="职位" prop="zw">
    <el-input v-model="ruleForm.zw"></el-input>
  </el-form-item>
  <el-form-item label="城市" prop="cs">
    <el-input v-model="ruleForm.cs"></el-input>
  </el-form-item>
  <el-form-item label="github" prop="github">
    <el-input v-model="ruleForm.github"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">完成修改</el-button>
  </el-form-item>
</el-form>
</el-dialog>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          _id:'',
          phone: '',
          Email: '',
          website: '',
          name: '',
          radio: '1',
          age:'',
          recode:'',
          school:'',
          zy:'',
          zgsc:'',
          zw:'',
          cs:"",
          github:'',
        },
        rules: {
          phone: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
          ],
          Email: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          name: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ]
        }
      };
    },
    props:{
      dialogFormVisible:{
          type:Boolean,
          default:false
      }
  },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.dispatch('addForm',this);
            this.$emit('update:dialogFormVisible',false);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    async created() {
        await this.$store.dispatch("getForm");
        this.ruleForm = this.$store.state.imgText.ruleForm
    },
  }
</script>
