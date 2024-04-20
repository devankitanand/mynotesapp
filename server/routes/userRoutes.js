const express = require('express');
const { registeruser, authuser } = require('../controllers/usercontroller');
const Router = express.Router();

Router.route("/register").post(registeruser);
Router.route("/login").post(authuser);

module.exports = Router;