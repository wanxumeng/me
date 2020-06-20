const jwt = require('jwt-simple');
const KEY = "me.com";
module.exports = {
    getNowTime(){
        var date = new Date();
        return date.getFullYear() + "-" +
            ((date.getMonth() + 1)).toString().padStart(2, 0) + "-" +
            (date.getDate()).toString().padStart(2, 0) + " " +
            (date.getHours()).toString().padStart(2, 0) + ":" +
            (date.getMinutes()).toString().padStart(2, 0) + ":" +
            (date.getSeconds()).toString().padStart(2, 0);
    },
    json(res,ok=-1,msg="网络连接错误"){
        res.json({
            ok,
            msg
        })
    },
    //创建令牌
    encode(payload){
        return jwt.encode({
            ...payload,
            ...{
                createTime:Date.now()
            }
        },KEY)
    },
    //解析令牌
    decode(token){
        try{
            const info = jwt.decode(token,KEY)
            const times = 10*60*60*1000;
            if(Date.now()-info.createTime>times){
                return {
                    ok:3,
                    msg:"令牌以过期"
                }
            }else{
                return{
                    ok:1,
                    msg:"成功",
                }
            }
        }catch(e){
            return {
                ok:2,
                msg:"令牌解析失败"
            }
        }
    },
    //获取客户端ip
    getClientIp(req) {
        var ipAddress;
        var forwardedIpsStr = req.header('x-forwarded-for'); 
        if (forwardedIpsStr) {
            var forwardedIps = forwardedIpsStr.split(',');
            ipAddress = forwardedIps[0];
        }
        if (!ipAddress) {
            ipAddress = req.connection.remoteAddress;
        }
        return ipAddress;
    }
}