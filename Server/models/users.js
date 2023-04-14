const { v4 } = require('uuid');
const md5 = require('md5');
const { getUsers, setUsers } = require('../utils/storage');

function createUser(userName, password, firstName) {
    let users = getUsers();
    const newUser = {};
    newUser.id = v4();
    newUser.picture = '../img/user/user.webp';
    newUser.userName = userName;
    newUser.password = md5(password);
    newUser.firstName = firstName;
    newUser.session = null;
    newUser.role = 'user';

    const newUsers = [...users, newUser];
    setUsers(newUsers);

    return newUser.id;
}
module.exports = {
    createUser,
};
