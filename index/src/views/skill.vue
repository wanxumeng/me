<template>
    <div>
        <div class="securityresearch">
      <div class="title">
        <el-divider content-position="center">个人技能</el-divider>
        <p><el-tag>vue全家桶</el-tag><el-tag >javascript</el-tag><el-tag>css</el-tag></p>
      </div>
      <div class="skill">
        <span class='vue'>Vue</span>
        <span class='react'>react</span>
        <span class='js'>JS</span>
        <span class='css'>CSS</span>
        <span class='echarts'>jQuery</span>
        <span class='webpack'>webpack</span>
        <span class='python'>node.js</span>
        <span class='linux'>微信小程序</span>
        <span class='ajax'>ajax</span>
        <span class='axios'>axios</span>
        <span class='mongodb'>mongoDB</span>
      </div>
  </div>
    </div>
</template>

<script>
    export default {
        name: "skill"
    }
</script>
<style>
  .securityresearch .title p .el-tag{
    margin: 0px 5px;
    cursor: pointer;
  }
  .securityresearch .box-card .text{
    text-align: left;
  }
</style>
<style scoped>
  .securityresearch{
    font-size: 14px;
    padding: 0px 100px;
  }
  .title p{
    color: #8c8888;
    font-size: 15px;
    margin-bottom: 80px;
    text-align: center;
  }
  .content p{
    font-size: 20px;
    color: #8c8888;
  }
  .skill{
    margin: 100px 0px;
    position: relative;
    text-align: center;
  }
  .skill span{
    display: inline-block;
    color: #fff;
    border-radius: 50%;
  }
  span.react{
    background-color: rgba(57, 187, 122,0.5) ;
    width: 180px;
    height: 180px;
    line-height: 200px;
    font-size: 28px;
    position: absolute;
    left: 51%;
    bottom: 90px;
    z-index: 100;
  }
  span.vue{
    background-color: rgba(30, 59, 88,0.5) ;
    width: 200px;
    height: 200px;
    line-height: 200px;
    font-size: 28px;
    z-index: 100;
  }
  span.js{
    background-color: rgba(255,153,102,0.5);
    width: 130px;
    height: 130px;
    line-height: 130px;
    font-size: 26px;
    position: absolute;
    left: 43%;
    bottom: 150px;
    z-index: 0;
  }
  span.css{
    background-color: rgba(102,204,204,0.8);
    width: 90px;
    height: 90px;
    font-size: 26px;
    line-height: 90px;
    font-size: 26px;
    position: absolute;
    left: 35%;
    top: 100px;
    z-index: 0;
  }
  span.echarts{
    background-color: rgba(255,153,153,0.7) ;
    width: 100px;
    height: 100px;
    line-height: 100px;
    font-size: 24px;
    position: absolute;
    left: 59%;
    bottom: 10px;
    z-index: 0;
  }
  span.webpack{
    background-color: rgba(255,204,51,0.8);
    width: 70px;
    height: 70px;
    line-height: 70px;
    font-size: 13px;
    position: absolute;
    left: 30%;
    top: 20px;
    z-index: 0;
  }
  span.python{
    background-color: rgba(204,102,102,0.5) ;
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    position: absolute;
    left: 51%;
    bottom: -10px;
    z-index: 0;
  }
  span.linux{
    background-color: rgba(153,153,255,0.8) ;
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    position: absolute;
    left: 65%;
    top: -50px;
    z-index: 0;
  }
  span.ajax{
    background-color: rgba(124, 81, 81, 0.5) ;
    width: 70px;
    height: 70px;
    line-height: 60px;
    font-size: 14px;
    position: absolute;
    left: 28%;
    bottom: -10px;
    z-index: 0;
  }
  span.axios{
    background-color: rgba(27, 95, 95, 0.5) ;
    width: 65px;
    height: 65px;
    line-height: 60px;
    font-size: 14px;
    position: absolute;
    left: 72%;
    bottom: -37px;
    z-index: 0;
  }
  span.mongodb{
    background-color: rgba(27, 95, 95, 0.5) ;
    width: 80px;
    height: 80px;
    line-height: 60px;
    font-size: 14px;
    position: absolute;
    left: 45%;
    bottom: -70px;
    z-index: 0;
  }
</style>