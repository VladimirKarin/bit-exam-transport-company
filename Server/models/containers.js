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

function deleteContainer(containerId) {
    let containers = getContainers();

    let updatedContainers = containers.filter(
        (container) => containerId !== container.id
    );
    setContainers(updatedContainers);
}

module.exports = {
    createContainer,
    deleteContainer,
};
