<template>
  <div>
      <el-dialog title="添加图片" :visible="dialogFormVisible" @update:visible="bol=>$emit('update:dialogFormVisible',bol)">
        <el-form :rules="rules">
            <el-form-item label="图片类别 :" label-width="110px" prop="imgType">
                <el-select  ref="imgType" v-model="imgInfo.imgType" placeholder="请选择图片类型">
                    <el-option label="轮播图" value="1"></el-option>
                    <el-option label="项目图片" value="2"></el-option>
                    <el-option label="头象" value="3"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="图片 :" label-width="110px">
                <el-upload
                    :auto-upload = "false"
                    class="upload-demo"
                    :headers = {authorization:$store.state.admin.token}
                    action="/api/imgList"
                    :limit = 1
                    :data ="imgInfo"
                    :on-success ="onsuccess"
                    name = "imgPic"
                    ref = "upload"
                    list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload> 
            </el-form-item>   
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="$emit('update:dialogFormVisible',false)">取 消</el-button>
            <el-button type="primary" @click="submitForm">确 定</el-button>
        </div>
        </el-dialog>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
      dialogFormVisible:{
          type:Boolean,
          default:false
      }
  },
  data() {
    return {
        imgInfo:{
          imgType:""
        },
        rules:{
            imgType: [
                { required: true, message: '请选择', trigger: 'blur' },
            ]
        }
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {
      submitForm(){
      this.$refs.upload.submit();
    },
    onsuccess(response){
      this.$emit('update:dialogFormVisible',false);
      this.$store.dispatch("getImgList",{pageIndex:1,limit:8});
    }
  },
};
</script>

<style scoped>

</style>
