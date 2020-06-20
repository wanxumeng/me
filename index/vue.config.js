module.exports = {
    devServer:{
        open:true,
        port:80,
        host:"127.0.0.1",
        proxy:{
            "/api":{
                target:"http://127.0.0.1:8080",
                changeOrigin: true,
                pathRewrite:{
                    "^/api":""
                }
            }
        }
    }
}