const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;//
const ObjectId = mongodb.ObjectId;
// 1、封装之后的代码尽量不要去改动
// 2、封装之后的代码尽量的满足不同的需求。
function _connect(){
    return new Promise((resolve,reject)=>{
        mongoClient.connect("mongodb://127.0.0.1:27017",{useUnifiedTopology: true },(err,client)=>{
        if(err) reject("链接数据库失败")
        else{
            const db = client.db("me");
            resolve(db)
        }
    })
    }) 
}
module.exports = {
    /*
    * 插入一条记录。
    * collName:指定插入的集合
    * insertObj:插入的内容*/
    async insertOne(collName,insertObj){
        const db = await _connect();
        return new Promise((resolve,reject)=>{
            db.collection(collName).insertOne(insertObj,(err,results)=>{
                if(err) reject("写入失败");
                else resolve("写入成功");
            });
        });
    },
    /*
    * 查找多条数据
    * collName:指定集合
    * obj:是一个对象，包含sort,limit,skip,whereObj*/
    async find(collName,obj={}){
        const db = await _connect();
        // 解构赋值。
        const {skip=0,limit=0,sort={},whereObj={}} = obj;
        return new Promise((resolve,reject)=>{
            db.collection(collName).find(whereObj).limit(limit).skip(skip).sort(sort).toArray((err,results)=>{
                if(err) reject("查找失败");
                else resolve(results);
            })
        })
    },
    //查找一条数据
    async findOne(collName,wedobj){
        const db = await _connect();
        return new Promise((resolve,reject)=>{
            db.collection(collName).findOne(wedobj,(err,results)=>{
                if(err) reject("查找失败");
                else resolve(results);
            })
        })
    },
    // 根据ID获得详情。
    findOneById(collName,id,cb){
        _connect(db=>{
            // 查找一条信息,findOne 第一个参数是条件，第二个参数是回调
            db.collection(collName).findOne({
                _id:ObjectId(id)
            },cb)
        })
    },
    /**
     * 根据条件获得文档的数量
     * collName:指定集合的名字
     * whereObj:条件
     * cb:回调函数（返回结果）
     */
    async count(collName,whereObj){
        const db = await _connect();
        return new Promise((resolve, reject) => {
            db.collection(collName).countDocuments(whereObj).then(count=>{
                resolve(count);
            })
        });
    },
    // 根据ID进行删除一条操作,并返回删除以后的结果
    async deleteOneById(collName,whereObj){
        const db = await _connect();
        return new Promise((resolve,reject)=>{
            db.collection(collName).deleteOne({
                _id:ObjectId(whereObj)
            },(err,result)=>{
                if(err) reject("删除失败");
                else resolve("删除成功");
            })
        })
    },
    // 根据ID进行修改。
    async upDateOneById(collName,whereobj,upObj){
        const db = await _connect();
         return new Promise((resolve, reject) => {
            db.collection(collName).updateOne(whereobj,upObj,(err,results)=>{
                if(err) reject("更新失败");
                else resolve("更新成功");
            }) 
        });
    },
    //获取数据
    async getData(req,collName,{sort={}}={}){
        const pageIndex = req.query.pageIndex/1;
        const limit = req.query.limit/1;
        const keyWord = req.query.keyWord || '';
        let whereObj ={};
        if(keyWord){
            whereObj={
                imgType:new RegExp(keyWord)
            }
        }
        let pageSum = 1;
        const count = await this.count(collName,whereObj);
        if(limit < 1) limit =1;
        pageSum = Math.ceil(count/limit);
        if(pageSum<1) pageSum = 1;
        if(pageIndex<1) pageIndex = 1;
        if(pageIndex>pageSum) pageIndex = pageSum;
        const results = await this.find(collName,{
            whereObj,
            limit,
            sort,
            skip:(pageIndex-1)*limit
        });
        return {
            ok:1,
            [collName]:results,
            pageIndex,
            pageSum
        }
    }

}
