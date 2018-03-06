const userDao = require('./../models/user.js');
var getUserById = async (userId) => {
    var users =await userDao.getUserById(userId);
    return users;
}
var findAllUser = async (userId) => {
    var users =await userDao.findAllUser(userId);
    var responseContent = '';
    for(let user of users) {
        responseContent += '姓名：' + user.name + '&nbsp;&nbsp;|&nbsp;&nbsp;';
        responseContent += 'id：' + user.id + '<br />';
    }
    return responseContent;
}

 var findAllUser2 = async (userId) => {
    return await userDao.findAllUser(userId); 
    }
var insertUser = async (user) => {
    return userDao.insertUser(user);   
}
module.exports = {
    getUserById : getUserById,
    findAllUser : findAllUser,
    insertUser : insertUser,
    findAllUser2:findAllUser2
};