const Profile = require("./profile")

class Intern extends Profile{
    constructor(name, email, school){
    super(name, email);
    this.school = school;
    this.role = "i"
}
}
module.exports = Intern