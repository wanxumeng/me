import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    banner:[],
    //留言内容
    contentList:[],
    pageIndex:1,
    pageSum:1
  },
  mutations: {
    //轮播图
    CHANGE_BANNER(state,banner){
      state.banner = banner
    },
    CONTENT_LIST(state,content){
      state.contentList = content.liuyan,
      state.pageIndex = content.pageIndex,
      state.pageSum = content.pageSum
    }
  },
  actions: {
    //获取图片
    async getBanner({commit}){
      const {data} = await axios.get("/api/imgList?t="+Date.now());
      if(data.ok === 1){
        commit("CHANGE_BANNER",data.imgList);
      }else alert("获取失败");
    },
    //添加留言
    async addliuyan({commit},content){
      const {data} = await axios.post("/api/liuyan",content);
      if(data.ok === 1){
      }else alert("留言失败");
    },
    //获取留言
    async getLiuyan({commit},{pageIndex,limit}){
      const {data} = await axios.get("/api/liuyan",{
          params:{
              pageIndex,
              limit
          }
      });
      if(data.ok === 1){
        commit("CONTENT_LIST",data)
      }else alert("获取失败");
  },
  },
  modules: {
  }
})
