const Profile = require("./profile")

class Intern extends Profile{
    constructor(name, email, school){
    super(name, email);
    this.school = school;

}
}
module.exports = Intern