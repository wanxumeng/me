<template>
<el-dialog title="添加公司" :visible="dialogFormVisible" @update:visible="bol=>$emit('update:dialogFormVisible',bol)">
<el-form :model="workForm" :rules="rules" ref="workForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="时间" prop="sj">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="workForm.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="workForm.date2" style="width: 100%;"></el-date-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="公司名" prop="gsm">
    <el-input v-model="workForm.gsm"></el-input>
  </el-form-item>
  <el-form-item label="工作描述" prop="ms">
    <el-input type="textarea" v-model="workForm.ms"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('workForm')">完成修改</el-button>
  </el-form-item>
</el-form>
</el-dialog>
</template>
<script>
  export default {
    data() {
      return {
        workForm: {
          date1: '',
          date2:'',
          gsm: '',
          ms: '',
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
            this.$store.dispatch('addworkForm',this);
            this.$emit('update:dialogFormVisible',false);
            this.$store.dispatch("getworkForm",{pageIndex:1,limit:8});
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    },
   
  }
</script>