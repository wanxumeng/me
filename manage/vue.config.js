module.exports = {
    devServer:{
        open:true,
        port:8081,
        host:"127.0.0.1",
        proxy:{
            "/api":{
                target:"http://127.0.0.1:8082",
                changeOrigin: true,
                pathRewrite:{
                    "^/api":""
                }
            }
        }
    }
}