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
    newBox.sum = 1;

    const newBoxes = [...boxes, newBox];
    setBoxes(newBoxes);

    return newBox.id;
}

function updateBox(boxId, key, value) {
    let boxes = getBoxes();

    const box = boxes.find((box) => boxId === box.id);

    const updatedBox = {
        ...box,
        [key]: value,
    };

    function reduceFunction(previousValue, box) {
        if (box.id === boxId) {
            return [...previousValue, updatedBox];
        }
        return [...previousValue, box];
    }

    const initialReduceValue = [];
    const updatedBoxes = boxes.reduce(reduceFunction, initialReduceValue);

    setBoxes(updatedBoxes);
}

function deleteBox(boxId) {
    let boxes = getBoxes();

    let updatedBoxes = boxes.filter((box) => boxId !== box.id);

    setBoxes(updatedBoxes);
}

module.exports = {
    createBox,
    updateBox,
    deleteBox,
};
