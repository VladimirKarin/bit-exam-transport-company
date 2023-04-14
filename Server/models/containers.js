const { v4 } = require('uuid');
const md5 = require('md5');
const {
    getUsers,
    setUsers,
    getContainers,
    setContainers,
} = require('../utils/storage');

function createContainer(type) {
    let containers = getContainers();
    const newContainer = {};
    newContainer.id = v4();
    newContainer.picture = '../img/user/user.webp';
    newContainer.type = type;
    newContainer.space = 'empty';
    const newContainers = [...containers, newContainer];
    setContainers(newContainers);

    return newContainer.id;
}
module.exports = {
    createContainer,
};
