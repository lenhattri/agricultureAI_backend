const express = require('express');
const {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
} = require('../controllers/userController');

const router = express.Router();

// Define routes and map them to controller functions
router.route('/')
    .get(getUsers)         // GET /users - Retrieve all users
    .post(createUser);     // POST /users - Create a new user

router.route('/:id')
    .get(getUserById)      // GET /users/:id - Retrieve a user by ID
    .put(updateUser)       // PUT /users/:id - Update a user by ID
    .delete(deleteUser);   // DELETE /users/:id - Delete a user by ID

module.exports = router;
