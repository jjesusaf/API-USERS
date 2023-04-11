const { Router } = require("express");
const router = Router();
const User = require("../models/users.model");
const {getAllUsers, getUserEmail, getUserId, postUser, deleteUser, updateUser} = require('../controllers/users.controller');

router.get("/api/v1/users", getAllUsers);

router.get('/api/v1/users/:id', getUserId);

router.get('/api/v1/users/email/:email', getUserEmail)

router.post('/api/v1/users', postUser);

router.delete('/api/v1/users/:id', deleteUser);

router.put('/api/v1/users/:id', updateUser);


module.exports = router;


