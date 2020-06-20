const formidable = require("formidable");
const path = require("path");
const fs = require("fs");
/*
* 上传图片
*   结果：{
* ok:1,成功，2，未上传图片，3 ，图片格式不正确
* req:请求对象
* picName:图片的名字（表单当中的name值）
* cb:返回的结果
* }
* */
 function fsUnlink(path){
     return new Promise((resolve,reject)=>{
         fs.unlink(path,err=>{
             if(err) reject("删除失败");
             else resolve("成功");
         })
     })
 }
 function fsRename(oldPath,newPath){
     return new Promise((resolve,reject)=>{
         fs.rename(oldPath,newPath,err=>{
             if(err) reject("失败");
             else resolve("成功");
         })
     })
 }
const uploadDir = path.resolve(__dirname,"../upload");
module.exports = function (req,picName) {

    const form = new formidable.IncomingForm();
    form.encoding = "utf-8";
    form.uploadDir = uploadDir;
    form.keepExtensions = true;// 保留扩展名
    return new Promise((resolve,reject)=>{
        form.parse(req, async(err,params,file)=>{
            const picInfo = file[picName];
            if(picInfo.size<=0){
                await fsUnlink(picInfo.path);
                reject({ok:2,msg:"未上传文件",params})
            }else{
                const extArr = [".gif",".png",".jpg"];
                const extname = path.extname(picInfo.path).toLowerCase();
                if(extArr.includes(extname)){
                    const newPicName = Date.now()+extname;
                    await fsRename(picInfo.path,uploadDir+"/"+newPicName);
                    params.newPicName = newPicName;
                    resolve({ok:1,msg:"上传成功",params})
                }else{
                    await fsUnlink(picInfo.path);
                    reject({ok:3,msg:"请选择正确的图片格式"})
                }
            }
        })
    })
}