<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img src="./assets/logo.png" alt="" srcset="">
            <strong>个人简历网站后台</strong>
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple-light">
            <el-dropdown>
            <span class="el-dropdown-link">
              {{$store.state.admin.adminName}}
            </span>
              <i class="el-icon-user-solid el-icon--right"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="$store.commit('OUT_LOGIN')">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside :style="{width:isCollapse?'auto':'201px'}">
        <el-menu :router="true" :default-active="$route.path" class="el-menu-vertical-demo" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-custom"></i>
              <span slot="title">管理员设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/">管理员登录日志</el-menu-item>
              <el-menu-item index="/adminList">管理员列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">图文管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/imgmanage">图片管理列表</el-menu-item>
              <el-menu-item index="/textmessage">个人信息管理</el-menu-item>
              <el-menu-item index="/work">工作经历</el-menu-item>
              <el-menu-item index="/item">项目经验</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span slot="title">留言管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/liuyan">留言列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
        <el-row style="text-align:center;background:#D3DCE6">
          <el-button round @click="isCollapse=!isCollapse"><i :class="isCollapse?'el-icon-d-arrow-right':'el-icon-d-arrow-left'"></i></el-button>
        </el-row>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
    },
    mounted() {
    },
  }
</script>
<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-header, .el-footer {
    background-color: rgb(0, 141, 225);
    color: #333;
    text-align: left;
    font-size: 25px;
    line-height: 60px;
    img {
      width: 40px;
      height: 40px;
      padding-left: 20px;
      padding-right: 20px;
      vertical-align: middle;
    }
    .el-dropdown {
      display: inline-block;
      position: relative;
      color: #ffffff;
      font-size: 20px;
      float: right;
      padding-right: 20px;
    }
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .el-aside {
    background-color: #ffffff;
    color: #333;
    text-align: left;

    // height: 100%;
    // line-height: 200px;
  }

  .el-main {
    background-color: rgb(255, 255, 255);
    color: #333;
    text-align: center;
    // line-height: 160px;
    .el-table td, .el-table th {
      margin-left: 20px;
      text-align: center;
    }
  }

  body > .el-container {
    margin-bottom: 40px;
  }
</style>
