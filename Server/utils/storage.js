const fs = require('fs');

function setData(data, fileName) {
    fs.writeFileSync(`./data/${fileName}.json`, JSON.stringify(data), 'utf-8');
}

function getData(fileName) {
    const jsonData = fs.readFileSync(`./data/${fileName}.json`, 'utf-8');
    const jsData = JSON.parse(jsonData);
    return jsData;
}

function getUsers() {
    return getData('users');
}

function setUsers(users) {
    setData(users, 'users');
}

function getContainers() {
    return getData('containers');
}

function setContainers(container) {
    setData(container, 'containers');
}

function getBoxes() {
    return getData('boxes');
}

function setBoxes(box) {
    setData(box, 'boxes');
}

module.exports = {
    getUsers,
    setUsers,
    getContainers,
    setContainers,
    getBoxes,
    setBoxes,
};
