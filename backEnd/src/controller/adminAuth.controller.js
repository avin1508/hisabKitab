const adminAuthSevice = require('../services/adminAuth.service');
const { httpCodes, httpMsg } = require('../config');



class adminAuthController {}

adminAuthController.adminRegisterController = async (req, res) => {
    try {
        // Dummy response to check if API is working
        res.status(200).json({
            message: "Admin register API is working!",
            data: req.body  // Echo back request body
        });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
} 

module.exports = adminAuthController;
