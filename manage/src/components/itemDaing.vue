<template>
<el-dialog title="添加项目" :visible="dialogFormVisible" @update:visible="bol=>$emit('update:dialogFormVisible',bol)">
<el-form :model="itemForm" :rules="rules" ref="itemForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="项目名" prop="xmm">
    <el-input v-model="itemForm.xmm"></el-input>
  </el-form-item>
  <el-form-item label="项目介绍" prop="xmjs">
    <el-input  v-model="itemForm.xmjs"></el-input>
  </el-form-item>
  <el-form-item label="所在公司" prop="szgs">
    <el-input  v-model="itemForm.szgs"></el-input>
  </el-form-item>
  <el-form-item label="开发环境" prop="kfhj">
    <el-input  v-model="itemForm.kfhj"></el-input>
  </el-form-item>
  <el-form-item label="职责描述" prop="zcms">
    <el-input  v-model="itemForm.zcms"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('itemForm')">完成修改</el-button>
  </el-form-item>
</el-form>
</el-dialog>
</template>
<script>
  export default {
    data() {
      return {
        itemForm: {
          xmm: '',
          xmjs:'',
          szgs: '',
          kfhj: '',
          zcms:''
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
            this.$store.dispatch('additemForm',this);
            this.$emit('update:dialogFormVisible',false);
            this.$store.dispatch("getitemForm",{pageIndex:1,limit:8});
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    },
   
  }
</script>