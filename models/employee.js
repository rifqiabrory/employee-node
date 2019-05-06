//model with sequelize mysql2
module.exports = (sequelize,DataType) => {
    const Employee = sequelize.define('employee', {
        nik:{
            field:'NIK',
            type:DataType.STRING,
            primaryKey:true,
            autoIncrement:false
        },
        name:{
            field:'name',
            type:DataType.STRING,
        },
        gender:{
            field:'gender',
            type:DataType.CHAR,
        },
        address:{
            field:'address',
            type:DataType.STRING,
        },
        salary:{
            field:'salary',
            type:DataType.DECIMAL,
        },
        grade:{
            field:'grade',
            type:DataType.CHAR,
        }
    },{
        tableName:'employee',
        timestamps:false
    });
    return Employee
}