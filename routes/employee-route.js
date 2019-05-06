module.exports = function(app){
    const Employee = require('../controller/employee-controller');
    app.route('/')
        .get(Employee.index);
    // app.route('/list')
    //     .get(Employee.employees);
    app.route('/employees')
        .get(Employee.employees);
    app.route('/employee/:nik')
        .get(Employee.employeeByNik);
    app.route('/employee')
        .post(Employee.employeeByNikOrCreate);
    app.route('/employee/:NIK')
        .post(Employee.deleteEmployee);
};