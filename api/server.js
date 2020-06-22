const express = require('express');
const bodyParser = require('body-parser');
const db = require('./module/db');
const tools = require('./module/tools');
const md5 = require('md5');
const uppic = require('./module/upPic')
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname+"/upload"));
app.post("/login",async (req,res)=>{
    try{
        const {adminName,passWord} = req.body;
        const ip = tools.getClientIp(req);
        //根据登录信息进行查找，等待结果
        const info = await db.findOne("adminList",{
            adminName,
            passWord:md5(passWord+"me.com")
        });
        //等待结束，写入一条操作信息
        await db.insertOne("adminLog",{
            adminName,
            logType:(info?1:2),
            detail:"登录信息"+(info?"成功":"失败"),
            ip,
            addTime:Date.now()
        })
        //等待写入成功，判断有无该账号
        if(info){
            await db.upDateOneById("adminList",{
                _id:info._id
            },{
                $set:{
                    loginTime:Date.now()
                }
            })
            res.json({
                ok:1,
                msg:"登录成功",
                token:tools.encode(adminName)
            });
        }else{
            tools.json(res,-1,"账号或密码有误")
        }
    }catch(err){
        tools.json(res,-1,err);
    }
    
});
app.all("*",(req,res,next)=>{
    const token = req.headers.authorization;
    const {ok,msg} = tools.decode(token);
    if(ok === 1) next();
    else tools.json(res,2,msg)
})
app.get("/adminLog",async(req,res)=>{
    try{
        const response = await db.getData(req,"adminLog",{sort:{addTime:-1}})
        res.json(response);
    }catch(e){
        tools.json(res)
    }
});
app.get("/adminList",async(req,res)=>{
    try{
        const response = await db.getData(req,"adminList",{sort:{addTime:-1}})
        res.json(response);
    }catch(e){
        tools.json(res)
    }
});
app.delete("/adminLog/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        await db.deleteOneById("adminLog",_id);
        tools.json(res,1,"成功");
    }catch(err){
        tools.json(res,2,"失败");
    }
});
// *********shop*******************************************************************************
app.post("/imgList",async(req,res)=>{
    try{
       const {ok,params,msg} = await uppic(req,"imgPic");
       if(ok === 1) {
           await db.insertOne("imgList",{
                imgType:params.imgType,
                shopTypePic:params.newPicName,
                addTime:Date.now()
           });
           tools.json(res,1,"上传成功");
       }else{
           tools,json(res,-1,msg)
       }
    }catch(e){
        tools,json(res,-1,"失败")
    }
});
app.get("/imgList",async(req,res)=>{
    try{
        const response = await db.getData(req,"imgList",{sort:{addTime:-1}})
        res.json(response);
    }catch(e){
        tools.json(res)
    }
});
app.delete("/imgList/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        await db.deleteOneById("imgList",_id);
        tools.json(res,1,"成功");
    }catch(err){
        tools.json(res,2,"失败");
    }
});
//修改信息
app.post("/ruleForm",async(req,res)=>{
    try{
       const {_id,phone,Email,website,name,radio,age,recode,school,zy,zgsc,zw,cw,cs,github} = req.body;
       await db.deleteOneById("ruleForm",_id);
        await db.insertOne("ruleForm",{
            phone,Email,website,name,radio,age,recode,school,zy,zgsc,zw,cw,cs,github,
            addTime:Date.now()
        });
        tools.json(res,1,"成功")
    }catch(e){
        tools.json(res,-1,"失败")
    }
});
app.get("/ruleForm",async(req,res)=>{
    try{
        const response = await db.getData(req,"ruleForm",{sort:{addTime:-1}})
        res.json(response);
    }catch(e){
        tools.json(res)
    }
});
//公司
app.post("/workForm",async(req,res)=>{
    try{
       const {date1,date2,gsm,ms} = req.body;
        await db.insertOne("workForm",{
            date1,date2,gsm,ms,
            addTime:Date.now()
        });
        tools.json(res,1,"成功")
    }catch(e){
        tools.json(res,-1,"失败")
    }
});
app.get("/workForm",async(req,res)=>{
    try{
        const response = await db.getData(req,"workForm",{sort:{addTime:-1}})
        res.json(response);
    }catch(e){
        tools.json(res)
    }
});
app.delete("/workForm/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        await db.deleteOneById("workForm",_id);
        tools.json(res,1,"成功");
    }catch(err){
        tools.json(res,2,"失败");
    }
});
//项目
app.post("/itemForm",async(req,res)=>{
    try{
       const {xmm,xmjs,szgs,kfhj,zcms} = req.body;
        await db.insertOne("itemForm",{
            xmm,xmjs,szgs,kfhj,zcms,
            addTime:Date.now()
        });
        tools.json(res,1,"成功")
    }catch(e){
        tools.json(res,-1,"失败")
    }
});
app.get("/itemForm",async(req,res)=>{
    try{
        const response = await db.getData(req,"itemForm",{sort:{addTime:-1}})
        res.json(response);
    }catch(e){
        tools.json(res)
    }
});
app.delete("/itemForm/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        await db.deleteOneById("itemForm",_id);
        tools.json(res,1,"成功");
    }catch(err){
        tools.json(res,2,"失败");
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
app.delete("/liuyan/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        await db.deleteOneById("liuyan",_id);
        tools.json(res,1,"成功");
    }catch(err){
        tools.json(res,2,"失败");
    }
});
app.listen(8082,()=>{
    console.log("success");
})
