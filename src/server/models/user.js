var util = require('./mysqlUtil.js')
let user=`create table if not exists user(
  id int(11) NOT NULL,
  name varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
);` 
// 建表
let createUserTable=util.createTable(user)
// 添加用户
let insertUser = function( value ) {
  let _sql = "insert into user(name,id) values(?,?);"
  return util.query( _sql, [value.name,value.id] )
}
// 查找用户
let getUserById = async  function (  id ) {
  let _sql = `SELECT * from user where id="${id}"`
  var aaa=await util.query( _sql);
  return await aaa[0];
}
// 查找用户列表
let findAllUser = function ( ) {
  let _sql = `SELECT * from user`
  return util.query( _sql)
} 
module.exports={
  createUserTable,
  insertUser,
  getUserById,
  findAllUser
}