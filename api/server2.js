const express = require('express');
const bodyParser = require('body-parser');
const db = require('./module/db');
const tools = require('./module/tools');
const md5 = require('md5');
const uppic = require('./module/upPic')
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname+"/upload"));
//获取图片
app.get("/imgList",async(req,res)=>{
    try{
        const response = await db.getData(req,"imgList",{sort:{addTime:-1}})
        res.json(response);
    }catch(e){
        tools.json(res)
    }
});
//添加留言
app.post("/liuyan",async(req,res)=>{
    try{
       const {content} = req.body;
       if(content.length<=20){
        await db.insertOne("liuyan",{
            content,
            addTime:Date.now()
        });
        tools.json(res,1,"成功")
       }else{
        tools.json(res,-1,"失败")
       }
    }catch(e){
        tools.json(res,-1,"失败")
    }
});
//获取留言
app.get("/liuyan",async(req,res)=>{
    try{
        const response = await db.getData(req,"liuyan",{sort:{addTime:-1}})
        res.json(response);
    }catch(e){
        tools.json(res)
    }
});
//个人信息
app.get("/ruleForm",async(req,res)=>{
    try{
        const response = await db.getData(req,"ruleForm",{sort:{addTime:-1}})
        res.json(response);
    }catch(e){
        tools.json(res)
    }
});
//公司
app.get("/workForm",async(req,res)=>{
    try{
        const response = await db.getData(req,"workForm",{sort:{addTime:-1}})
        res.json(response);
    }catch(e){
        tools.json(res)
    }
});
//项目
app.get("/itemForm",async(req,res)=>{
    try{
        const response = await db.getData(req,"itemForm",{sort:{addTime:-1}})
        res.json(response);
    }catch(e){
        tools.json(res)
    }
});
app.listen(8080,()=>{
    console.log("success");
})