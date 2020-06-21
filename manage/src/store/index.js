import Vue from 'vue'
import Vuex from 'vuex'
import admin from './admin'
import imgText from './imgText'
import liuyan from './liuyan'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading:false,
    pageIndex:1,
    pageSum:1
  },
  mutations: {
    CHANGE_IS_LOADING(state,bool){
      state.isLoading = bool
    },
    CHANGE_UP_PAGE(state,{pageIndex,pageSum}){
      state.pageIndex = pageIndex;
      state.pageSum = pageSum
    }
  },
  actions: {
  },
  modules: {
    admin,
    imgText,
    liuyan
  }
})
