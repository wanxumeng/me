<template>
  <div class="productpage">
    <div class="title">
      <el-divider content-position="center">工作经历</el-divider>
      <p><el-tag v-for="item in $store.state.workForm" :key="item._id">{{item.gsm}}</el-tag></p>
    </div>
    <div class='experience'>
      <el-timeline>
        <el-timeline-item v-for="item in $store.state.workForm" :key="item._id" :timestamp="item.date1|datas" placement="top">
          <el-card>
            <h4>{{item.gsm}}</h4>
            <p>
              {{item.ms}}
            </p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      direction: 'btt',
      currentIndex: 0,
      timestamp:""
    }
  },
  filters:{
            datas(v){
                return v.substring(0,10);
            }
        },
  methods: {
    handleClose (done) {
      done()
    },
    drawerHander (index) {
      this.drawer = true
      this.currentIndex = index - 1
    }
  },
 async mounted() {
            await this.$store.dispatch("getworkForm");
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
    background-color: rgb(61, 67, 72);
    color: #ccc;
  }
  div .el-drawer__body{
    padding: 0px 20px 0px 20px;
  }
</style>
<style scoped>
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