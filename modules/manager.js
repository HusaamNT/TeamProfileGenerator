const Profile = require("./profile")

class Manager extends Profile{
    constructor(name, email, officeNo){
    super(name, email);
    this.officeNo = officeNo;
}
}

module.exports = Manager