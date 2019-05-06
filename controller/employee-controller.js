// const connection = require('../utils/connection');
const response = require('../utils/response');
const employeeDao = require('../dao/employee-dao');

// exports.employees = function(req,res) {
//     connection.query('SELECT * FROM employee ORDER BY NIK ASC', function (error,result){
//         if(error){
//             console.log(error);
//         }else{
//             response.ok('Success',result,res);
//         }
//     });
// };
//==================================================
// with sequelize
exports.employees = function(req, res) {
    employeeDao.getList(function(error, result){
        if(error){
           response.failed(res, error);
        }else{
            response.success(res, result);
        }
    });
}

exports.employeeByNik = function(req,res){
    employeeDao.getByNik(req.params['nik'], function(error, data){
        if(error){
            response.failed(res, error);
        }else if(data){
            response.success(res, data);
        }else{
            response.notFound(res, req.params.nik);
        }
    })
}
//find one or create new
exports.employeeByNikOrCreate = function(req,res){
    let body = req.body;
    employeeDao.getByNikOrCreate(body, function(error, data){
        if(error){
            response.failed(res, error);
        }else if(!data){//false
            response.exists(res,body);
        }else if(data){//true
            response.success(res, data);
        }
    })
}

exports.deleteEmployee = function(req,res){
    employeeDao.deleteEmployee(req.params['nik'], function(error, data){
        if(error){
            response.failed(res, error);
        }else if(data){
            response.success(res, data);
        }else{
            response.notFound(res, req.params.nik);
        }
    })
}

// exports.employeeByNik = function(req,res) {

//     employeeDao.getByNik(req.params['nik']).then(
//         function(data){
//             if(data){
//                 response.success(res,data);
//             }else{
//                 response.notFound(res,req.params.nik);
//             }
//         },
//         function(error){
//             response.failed(res,error);
//         }
//     );
// }

//======================================================
// EmployeeRoute.get('/list', (req, res) => {
//     let query = "SELECT * From employee ORDER BY NIK ASC";
//     db.query(query,(error,result) => {
//         if(error){
//             res.json(err);
//         }else{
//             //res.json(result);
//             response.ok("success",result,res);
//         }
//     });
// });

// EmployeeRoute.post('/new',(req,res) => {
//     var NIK = req.body.NIK;
//     var name = req.body.name;
//     var gender = req.body.gender;
//     var address = req.body.address;
//     var salary = req.body.salary;
//     var grade = req.body.grade;

//     let query = 'INSERT INTO employee (NIK,name,gender,address,salary,grade) VALUES(?,?,?,?,?,?)';
//     db.query(query,[NIK,name,gender,address,salary,grade],(error,rows,result) => {
//         if(error){
//             res.json(error);
//         }else{
//             response.ok("Success",rows,res);
//         }
//     });
// });

// EmployeeRoute.get('/list/:NIK',(req,res) => {
//     var NIK = req.params.NIK;

//     let query = 'SELECT * FROM employee WHERE NIK = ?';
//     db.query(query,[NIK],(error,rows,result) => {
//         if(error){
//             res.json(error);
//         }else{
//             response.ok("Success",rows,res);
//         }
//     });
// });

// EmployeeRoute.delete('/list/:NIK',(req,res) => {
//     var NIK = req.params.NIK;

//     let query = 'DELETE FROM employee WHERE NIK = ?';
//     db.query(query,[NIK],(error,rows,result) => {
//         if(error){
//             res.json(error);
//         }else{
//             response.ok("Success",rows,res);
//         }
//     });
// });

exports.index = function(req, res, result) {
    response.notFound(res,result)
};