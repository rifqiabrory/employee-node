const {Employee} = require('../utils/sequelize');

function getList(callback){
    Employee.findAll().then(
        (employees) => {
            callback(null,employees);
        }
    )
}
// find by primary key
// function getByNik(nik, callback){
//     Employee.findByPk(nik).then(
//         (employee) => {
//             callback(null,employee);
//         }
//     )
// }

//find by one
function getByNik(nik, callback){
    Employee.findOne({
        where:{nik:nik}
    }).then(
        (employee) => {
            callback(null,employee);
        }
    )
}

//find by name(some field) and by pk field
//nik in attributes as primarykey and name as named in model and name other as name field in database
// function getByNik(nik, callback){
//     Employee.findOne({where:{name:nik},attributes:['nik',['name','name']]}).then(
//         (employee) => {
//             callback(null,employee);
//         }
//     )
// }

//find or create
//used to check if a certain data already exists in database,
//if doesn't yet exists it will be created
function getByNikOrCreate(data, callback){
    Employee.findOrCreate({
        where:{nik:data.nik}, 
        defaults:{
            name:data.name,
            gender:data.gender,
            address:data.address,
            salary:data.salary,
            grade:data.grade
        }}).then(
        ([employee,created]) => {
            callback(null,created,employee);
        }
    )
}

function deleteEmployee(NIK){
    Employee.create({nik:NIK}).then( employee => {
        return employee.destroy();
    })
}

// //using promise
// function getByNik(nik){
//     return new Promise((resolve, reject) => {
//         resolve(Employee.find(
//             employee => {
//                 return employee.nik == nik;
//             }
//         ));
//         resolve(console.error("Error"));
//     });
// }

module.exports = {
    getList,
    getByNik,
    getByNikOrCreate,
    deleteEmployee
};