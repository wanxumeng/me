const md5 = require('md5');
const password = md5(123456+"me.com");
const db = require('./db')
// console.log(password)
const res = db.getData("adminLog",{sort:{addTime:-1}})
res.then(data=>console.log(data))