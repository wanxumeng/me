import axios from "axios";
const state = {
    liuyanList:[],
}
const mutations ={
    //留言列表
    CHANGE_LIUYAN_LIST(state,liuyanList){
        state.liuyanList = liuyanList
    }
}
const actions = {
    //获取留言
    async getLiuyan({commit},{pageIndex,limit}){
        const data = await axios.get("/liuyan",{
            params:{
                pageIndex,
                limit
            }
        });
        if(data.ok === 1){
          commit("CHANGE_LIUYAN_LIST",data.liuyan)
        }else alert("获取失败");
    },
    async deleteliuyan(context,_id){
        const data = await axios.delete("/liuyan/"+_id);
        if(data.ok === 1){
            context.dispatch("getLiuyan",{pageIndex:context.rootState.pageIndex,limit:8});
            console.log(context)
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