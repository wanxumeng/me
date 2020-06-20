const jwt = require("jwt-simple");
const KEY = "me.com";
const token =jwt.encode({
    adminList:122
},KEY)
console.log(token)
console.log(jwt.decode(token,KEY))