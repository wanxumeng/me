<template>
  <div class="productpage">
    <div class="title">
      <el-divider content-position="center">项目经验</el-divider>
    </div>
    <div class="project">
      <div class="content" v-for="(item,i) in $store.state.banner" :key="item._id" @click="drawerHander(i)">
          <img src='../assets/logo.png' class='ifns'>
          <div class='hover'>
            <p>项目1</p>
          </div>
      </div>
    </div>
    <el-drawer
      :title="detes.xmm"
      :visible.sync="drawer"
      size="50%"
      :direction="direction"
      :before-close="handleClose">
        <p class='info'>
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark">
                项目介绍：{{detes.xmjs}}
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark">
                所在公司：{{detes.szgs}}
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark">
                开发环境：{{detes.kfhj}}
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark">
                职责描述:{{detes.zcms}}
              </div>
            </el-col>
          </el-row>
        </p>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'item',
  data () {
    return {
      drawer: false,
      direction: 'btt',
      currentIndex: 0,
      detes:{}
    }
  },
  methods: {
    handleClose (done) {
      done()
    },
     async drawerHander (index) {
      this.drawer = true
      await this.$store.dispatch("getitemForm");
      this.detes = this.$store.state.itemForm[index]
    }
  },
  created() {
    this.$store.dispatch("getBanner",{keyWord:2})
  }, 
}
</script>
<style>
  div .el-divider--horizontal{
    height: 2px;
    margin-top:100px;
    background-color: rgb(84, 92, 100);
  }
  div .el-divider__text{
    font-size: 26px;
    color: #545c64;
  }
  div .el-drawer__header{
    font-size: 20px;
    font-weight: blod;
    padding-bottom: 20px;
    border-bottom: 1px solid;
  }
  div .el-drawer{
    background-color: #fff;
    color: #ccc;
  }
  div .el-drawer__body{
    padding: 0px 20px 0px 20px;
  }
</style>
<style scoped>
    .el-drawer.btt{
      height: 50%;
    }
  .productpage{
    padding: 0px 100px 0px 100px;
  }
  .productpage .project{
    display: flex;
    justify-content:space-around;
  }
  .ifns{
    width:85%;
    display: inline-block;
    outline: 1px dashed rgba(84, 92, 100, 0.1);
  }
  .experience{
    text-align: left;
  }
  .content{
    text-align: center;
    display: inline;
    position: relative;
    margin: 20px;
  }
  .content p{
    width: 95%;
    color: #fff;
    font-size: 14px;
    text-align: center;
  }
  .hover{
    position: absolute;
    bottom: 5px;
    left: 7.5%;
    background-color: rgba(84, 92, 100, 0.3);
    height: 60px;
    width: 85%;
    line-height: 60px;
    cursor: pointer;
  }
  .hover:hover{
    background-color: rgba(84, 92, 100, 0.6);
  }
  h1{
    border:1px solid #ccc;
    height: 0px;
  }
  .title p{
    color: #8c8888;
    font-size: 15px;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .title p .el-tag{
    margin: 0px 5px;
    cursor: pointer;
  }
  .info{
    font-size: 14px;
    color: #72767b;
    line-height: 25px;
  }
</style>