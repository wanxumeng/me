import axios from "axios";
const state = {
    adminName : sessionStorage.adminName || null,
    token : sessionStorage.token || null,
    adminLog:[],
    adminList:[],
    adminTypeNum:{
        1:"登录成功",
        2:"登录失败"
    }
}
const mutations ={
    //登录
    CHANGE_USER_NAME(state,{userName,token}){
        state.adminName = sessionStorage.adminName = userName
        state.token = sessionStorage.token = token
    },
    //退出登录
    OUT_LOGIN(state){
        sessionStorage.clear();
        state.adminName = null
    },
    //登录日志
    CHANGE_ADMIN_LOG(state,adminLog){
        state.adminLog = adminLog;
    },
    //管理员列表
    CHANGE_ADMIN_LIST(state,adminList){
        state.adminList = adminList
    }
}
const actions = {
    async login({commit},vm){
        const data = await axios.post("/login",vm.adminForm);
        if(data.ok ===1)
            commit("CHANGE_USER_NAME",{userName:vm.adminForm.adminName,token:data.token});
        else{
            vm.$message.error(data.msg);
        }
    },
    async getAdminLog({commit},{pageIndex,limit}){
        const data = await axios.get("/adminLog",{
            params:{
                pageIndex,
                limit
            }
        });
        if(data.ok === 1){
            commit("CHANGE_ADMIN_LOG",data.adminLog);
        }else alert("获取失败");
    },
    async getAdminList({commit},{pageIndex,limit}){
        const data = await axios.get("/adminList",{
            params:{
                pageIndex,
                limit
            }
        });
        if(data.ok === 1){
            commit("CHANGE_ADMIN_LIST",data.adminList);
        }else alert("获取失败");
    },
    async deleteAdminLog(context,_id){
        const data = await axios.delete("/adminLog/"+_id);
        if(data.ok === 1){
            context.dispatch("getAdminLog",{pageIndex:context.rootState.pageIndex,limit:8});
        }else{
            alert(data.删除失败);
        }
    }
}
export default {
    state,
    mutations,
    actions
}