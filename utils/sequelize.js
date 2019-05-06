const Sequelize = require('sequelize');
const EmployeeModel = require('../models/employee');

const sequelize = new Sequelize('node-app', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Employee = EmployeeModel(sequelize, Sequelize);
module.exports = {
    Employee
};
