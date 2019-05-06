class CommonResponse {
    constructor (status,message,data) {
        this.status = status ? status : "101";
        this.message = message ? message : "Success";
        this.data = data;
    }
}

module.exports = CommonResponse;