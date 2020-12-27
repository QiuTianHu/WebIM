var Koa = require('koa');
//var Cookie = require('koa-cookie');
var bodyParser = require('koa-body-parser');

// 引入路由模块
var auth = require('./routes/auth');
// var users = require('./routes/users');


var app = new Koa();

// bodyParser 不加这个无法读取 request body 的 json
app.use(bodyParser());

// 路由
// app.use(users.routes(), users.allowedMethods());
app.use(auth.routes(), auth.allowedMethods());

app.listen(3000);