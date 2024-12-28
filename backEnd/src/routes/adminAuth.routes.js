const adminAuthRoutes = require('express').Router();
const adminAuthController = require('../controller/adminAuth.controller')

adminAuthRoutes.post('/registerAdmin', adminAuthController.adminRegisterController)

module.exports = adminAuthRoutes

