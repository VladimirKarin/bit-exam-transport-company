const { createBox } = require('./models/box');
const { createContainer, deleteContainer } = require('./models/containers');
const { createUser } = require('./models/users');

// createUser('admin', '202cb962ac59075b964b07152d234b70', 'Administrator');
// createContainer('small');
// deleteContainer('e3a2ec5d-c9e8-4b8d-929a-3221b3078286');

createBox('50 kg', 'yes', 'no', 'ba29cbe2-738b-48e9-aef9-528bc7ed58a2');
