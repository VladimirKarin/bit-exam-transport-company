const { v4 } = require('uuid');
const md5 = require('md5');
const { getBoxes, setBoxes } = require('../utils/storage');

function createBox(weight, flamable, exparation, containerId) {
    let boxes = getBoxes();
    const newBox = {};
    newBox.id = v4();
    newBox.picture = '../img/box/box.png';
    newBox.weight = weight;
    newBox.flamable = flamable;
    newBox.exparation = exparation;
    newBox.containerId = containerId;

    const newBoxes = [...boxes, newBox];
    setBoxes(newBoxes);

    return newBox.id;
}
module.exports = {
    createBox,
};
