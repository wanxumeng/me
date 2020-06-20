import Vue from 'vue'
import App from './App.vue'
import Login from './Login.vue'
import router from './router'
import axios from 'axios'
import components from './components'
import filters from './filters';
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false
for(let key in components){
  Vue.component(key,components[key])
}
for(let key in filters){
  Vue.filter(key,filters[key]);
}
//请求拦截设置
axios.interceptors.request.use(req=>{
  req.url = "/api"+req.url;
  req.headers = {authorization:store.state.admin.token}
  store.commit("CHANGE_IS_LOADING",true);
  return req;
})
//响应拦截设置
axios.interceptors.response.use(res=>{
  if(res.data.ok === 2){
    Vue.prototype.$alert('你的授权已过期', '授权', {
      confirmButtonText: '确定',
      callback: action => {
        store.commit("OUT_LOGIN");
        Vue.prototype.$message({
          type: 'info',
          message: `请重新登录`
        });
      }
    });
  }
  store.commit("CHANGE_IS_LOADING",false);
  if(res.data.pageIndex){
    store.commit("CHANGE_UP_PAGE",{pageIndex:res.data.pageIndex,pageSum:res.data.pageSum})
  }
  return res.data
})
new Vue({
  router,
  store,
  render: function (h) { return h(this.$store.state.admin.adminName?App:Login) }
}).$mount('#app')