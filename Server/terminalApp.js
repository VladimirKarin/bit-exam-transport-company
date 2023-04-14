const { createNewUser } = require('./controllers');
const { createBox, updateBox, deleteBox } = require('./models/box');
const {
    createContainer,
    deleteContainer,
    getAllContainers,
} = require('./models/containers');
const { createUser } = require('./models/users');

// createUser('admin', '202cb962ac59075b964b07152d234b70', 'Administrator');
// createContainer('small');
// createContainer('medium');
// createContainer('large');
// deleteContainer('e3a2ec5d-c9e8-4b8d-929a-3221b3078286');

// createBox('50 kg', 'yes', 'no', 'ba29cbe2-738b-48e9-aef9-528bc7ed58a2');
// updateBox('34e96c52-6c2a-4db6-8750-61d8962359bd', 'exparation', 'yes');
// deleteBox('34e96c52-6c2a-4db6-8750-61d8962359bd');
// createBox('50 kg', 'yes', 'no', 'ba29cbe2-738b-48e9-aef9-528bc7ed58a2');
// createBox('60 kg', 'no', 'yes', 'ba29cbe2-738b-48e9-aef9-528bc7ed58a2');
// createBox('30 kg', 'yes', 'no', 'adb5472b-c7c9-450e-bd02-7646882d8988');
// createBox('20 kg', 'no', 'yes', '86533291-d9bc-42fb-8df9-e80ab308cdad');
// createBox('10 kg', 'yes', 'no', 'db5a4bc4-c72e-4f28-ba59-c365889cfac3');
// getAllContainers();
createNewUser('user1', '123', 'Yoda');
