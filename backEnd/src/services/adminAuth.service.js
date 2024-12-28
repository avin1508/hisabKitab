const db = require('../dataBase/dbIndex')
const { httpCodes, httpMsg } = require('../config');

const Admins = db.admins;


class adminAuthSevice {}

adminAuthSevice.registerAdmin = async ({data}) => {
    return {
        message: "Register admin service is working!",
        data: data
    };
}



module.exports = adminAuthSevice;