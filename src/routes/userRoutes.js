const express = require('express');
const {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
} = require('../controllers/userController');
const authenticateToken = require('../utils/authenticateToken')
const router = express.Router();

// Define routes and map them to controller functions
router.route('/')
    .get(getUsers)         // GET /api/v1/users - Retrieve all users
    .post(createUser);     // POST /api/v1//users - Create a new user

router.route('/:id')
    .get(getUserById)      // GET /api/v1//users/:id - Retrieve a user by ID
    .put(updateUser)       // PUT /api/v1//users/:id - Update a user by ID
    .delete(deleteUser);   // DELETE /api/v1//users/:id - Delete a user by ID

module.exports = router;
