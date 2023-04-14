const { getUsers, setUsers } = require('./utils/storage');
const { createUser } = require('./models/users');

function createNewUser(userName, password, firstName) {
    let users = getUsers();
    if (!Array.isArray(users)) {
        users = [users];
    }
    const newUser = createUser(userName, password, firstName);
    const newUsers = [...users, newUser];
    setUsers(newUsers);
}

module.exports = {
    createNewUser,
};
