import express from 'express';
import bodyParser from 'body-parser';
var employeeRoute = require ('./routes/employee-route');
//var employee = require ('./controller/employee-controller');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
employeeRoute(app);
//app.use(employee);

app.listen(3000, () => console.info('Application started on port 3000'));