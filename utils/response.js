import CommonResponse from './common-response';

function Success(res, data, status, message) {
    let commonResponse = new CommonResponse();
    if(status){
        commonResponse.status = status;
        commonResponse.message = message;
    }

    commonResponse.data = data;
    res.json(commonResponse);
}

function Failed(res, data, status, message) {
    const failedCode = status ? status : "444";
    const failedMessage = message ? message : "Failed";

    Success(res, data, failedCode, failedMessage);
}

function Exists(res, data, status, message) {
    const failedCode = status ? status : "443";
    const failedMessage = message ? message : "Data already exists";

    Success(res, data, failedCode, failedMessage);
}

function NotFound(res, data, status, message) {
    const notFoundCode = status ? status : "401";
    const notFoundMessage = message ? message : "Data Not Found";

    Success(res, data, notFoundCode, notFoundMessage);
}

exports.success = Success;
exports.failed = Failed;
exports.notFound = NotFound;
exports.exists = Exists;