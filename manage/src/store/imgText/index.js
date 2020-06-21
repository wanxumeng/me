import axios from 'axios'
const state = {
    imgList:[],
    imgTypeNum:{
        1:"轮播图",
        2:"项目图片"
    },
    ruleForm:{},
    workForm:[],
    itemForm:[]
}
const mutations ={
    CHANGE_IMG_LIST(state,shopTypeList){
        state.imgList = shopTypeList
    },
    CHANGE_RULEFORM(state,ruleform){
        state.ruleForm = ruleform[0]
    },
    CHANGE_WORKFORM(state,workForm){
        state.workForm = workForm
    },
    CHANGE_ITEMFORM(state,itemForm){
        state.itemForm = itemForm
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
            vm.$message({
                message: '恭喜你，修改成功',
                type: 'success'
              });
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
    //公司
    async addworkForm({commit},vm){
        const data = await axios.post("/workForm",vm.workForm);
        if(data.ok ===1){
            vm.$message({
                message: '恭喜你，修改成功',
                type: 'success'
              });
        }
        else{
            vm.$message.error(data.msg);
            }
    },
    async getworkForm({commit},{pageIndex=1,limit=8,keyWord=''}={}){
        const data = await axios.get("/workForm");
        if(data.ok === 1){
            commit("CHANGE_WORKFORM",data.workForm)
        }else alert("获取失败");
    },
    //项目
    async additemForm({commit},vm){
        const data = await axios.post("/itemForm",vm.itemForm);
        if(data.ok ===1){
            vm.$message({
                message: '恭喜你，修改成功',
                type: 'success'
              });
        }
        else{
            vm.$message.error(data.msg);
            }
    },
    async getitemForm({commit},{pageIndex=1,limit=8,keyWord=''}={}){
        const data = await axios.get("/itemForm");
        if(data.ok === 1){
            commit("CHANGE_ITEMFORM",data.itemForm);
        }else alert("获取失败");
    },
}

export default{
    state,
    mutations,
    actions
}