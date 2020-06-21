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
    pageSum:1,
    ruleForm:{},
    workForm:[],
    itemForm:[]
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
    },
    CHANGE_RULEFORM(state,ruleform){
      state.ruleForm = ruleform[0]
  },
  //公司
  CHANGE_WORKFORM(state,workForm){
    state.workForm = workForm
},
CHANGE_ITEMFORM(state,itemForm){
  state.itemForm = itemForm
}
  },
  actions: {
    //获取轮播图图片
    async getBanner({commit},{pageIndex=1,limit=8,keyWord=''}={}){
      const {data} = await axios.get("/api/imgList",{
          params:{
              pageIndex,
              limit,
              keyWord
          }
      });
      if(data.ok === 1){
        commit("CHANGE_BANNER",data.imgList);
      }else alert("获取失败");
  },
  //获取个人信息
  async getForm({commit},{pageIndex=1,limit=8,keyWord=''}={}){
    const {data} = await axios.get("/api/ruleForm");
    if(data.ok === 1){
        commit("CHANGE_RULEFORM",data.ruleForm)
    }else alert("获取失败");
},
//公司
async getworkForm({commit},{pageIndex=1,limit=8,keyWord=''}={}){
  const {data} = await axios.get("/api/workForm");
  if(data.ok === 1){
      commit("CHANGE_WORKFORM",data.workForm)
  }else alert("获取失败");
},
//项目
async getitemForm({commit},{pageIndex=1,limit=8,keyWord=''}={}){
  const {data} = await axios.get("/api/itemForm");
  if(data.ok === 1){
      commit("CHANGE_ITEMFORM",data.itemForm);
      console.log(data);
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
