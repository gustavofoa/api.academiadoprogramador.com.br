const express = require('express');
const { UserController } = require('../controller/UserController');

const router = express.Router();
const controller = new UserController();

router.get('/me', controller.getMe);

module.exports = router;
