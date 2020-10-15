const express = require('express');
const { UsersController } = require('../controller/UsersController');

const router = express.Router();
const controller = new UsersController();

router.get('/me', controller.getMe);

module.exports = router;
