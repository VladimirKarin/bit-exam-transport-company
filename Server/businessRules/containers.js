const { getAllContainers } = require('../models/containers');

function getContainers() {
    return getAllContainers();
}

module.exports = {
    getContainers,
};
