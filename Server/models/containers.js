const { v4 } = require('uuid');
const md5 = require('md5');
const {
    getBoxes,
    setBoxes,
    getContainers,
    setContainers,
} = require('../utils/storage');

function createContainer(type) {
    let containers = getContainers();
    const newContainer = {};
    newContainer.id = v4();
    newContainer.picture = '../img/container/container.jpeg';
    newContainer.type = type;
    newContainer.boxCount = 0;
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

function getAllContainers() {
    const containers = getContainers();
    const boxes = getBoxes();

    const containersWithBoxes = containers.reduce(
        (updatedContainers, container) => {
            const boxesInThisContainer = boxes.filter((box) => {
                console.log(box);
                console.log(container.id);
                return box.containerId === container.id;
            });
            console.log(boxesInThisContainer);

            const totalBoxSum = boxesInThisContainer.reduce(
                (totalSum, currentBox) => {
                    return totalSum + currentBox.sum;
                },
                0
            );

            const updatedContainer = {
                ...container,
                boxes: boxesInThisContainer,
                totalBoxSum,
            };

            return [...updatedContainers, updatedContainer]; //updating container list, by adding new updated container.
        },
        []
    );
    return containersWithBoxes;
}

module.exports = {
    createContainer,
    deleteContainer,
    getAllContainers,
};
