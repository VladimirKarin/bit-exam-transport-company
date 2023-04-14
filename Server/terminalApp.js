const { createBox, updateBox, deleteBox } = require('./models/box');
const { createContainer, deleteContainer } = require('./models/containers');
const { createUser } = require('./models/users');

// createUser('admin', '202cb962ac59075b964b07152d234b70', 'Administrator');
createContainer('small');
createContainer('medium');
createContainer('large');
// deleteContainer('e3a2ec5d-c9e8-4b8d-929a-3221b3078286');

// createBox('50 kg', 'yes', 'no', 'ba29cbe2-738b-48e9-aef9-528bc7ed58a2');
// updateBox('34e96c52-6c2a-4db6-8750-61d8962359bd', 'exparation', 'yes');
// deleteBox('34e96c52-6c2a-4db6-8750-61d8962359bd');
