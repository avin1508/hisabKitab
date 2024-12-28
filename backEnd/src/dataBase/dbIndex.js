const CONFIG = require('./dbConfig'); 
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  CONFIG.SQL_CONFIG.database, 
  CONFIG.SQL_CONFIG.username, 
  CONFIG.SQL_CONFIG.password, {
    host: CONFIG.SQL_CONFIG.host,
    port: CONFIG.SQL_CONFIG.port,
    dialect: CONFIG.SQL_CONFIG.dialect,
    logging: false 
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


// association and models will be here

db.admins = require("./models/admins.model")(sequelize, Sequelize);
db.employees = require("./models/employees.model")(sequelize, Sequelize);




// Define associations
db.admins.hasMany(db.employees, { foreignKey: 'adminId', as: 'employees', onDelete: 'NO ACTION', onUpdate: 'NO ACTION', });
db.employees.belongsTo(db.admins, { foreignKey: 'adminId', as: 'admin', onDelete: 'NO ACTION', onUpdate: 'NO ACTION', });

// Self-referential association for managers
db.employees.hasMany(db.employees, { foreignKey: 'managerId', as: 'subordinates', onDelete: 'NO ACTION', onUpdate: 'NO ACTION', });
db.employees.belongsTo(db.employees, { foreignKey: 'managerId', as: 'manager', onDelete: 'NO ACTION', onUpdate: 'NO ACTION', });





module.exports = db;
