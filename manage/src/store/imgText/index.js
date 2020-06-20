import axios from 'axios'
const state = {
    imgList:[],
    imgTypeNum:{
        1:"轮播图",
        2:"项目图片"
    },
    ruleForm:{},
    
}
const mutations ={
    CHANGE_IMG_LIST(state,shopTypeList){
        state.imgList = shopTypeList
    },
    CHANGE_RULEFORM(state,ruleform){
        state.ruleForm = ruleform[0]
    }
}
const actions = {
    async getImgList({commit},{pageIndex=1,limit=8,keyWord=''}={}){
        const data = await axios.get("/imgList",{
            params:{
                pageIndex,
                limit,
                keyWord
            }
        });
        if(data.ok === 1){
            commit("CHANGE_IMG_LIST",data.imgList);
        }else alert("获取失败");
    },
    async addForm({commit},vm){
        const data = await axios.post("/ruleForm",vm.ruleForm);
        if(data.ok ===1){
            
        }
    else{
        vm.$message.error(data.msg);
    }
    },
    async getForm({commit},{pageIndex=1,limit=8,keyWord=''}={}){
        const data = await axios.get("/ruleForm");
        if(data.ok === 1){
            commit("CHANGE_RULEFORM",data.ruleForm)
        }else alert("获取失败");
    },
}

export default{
    state,
    mutations,
    actions
}