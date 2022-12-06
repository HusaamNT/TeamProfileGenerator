const Profile = require("./profile")

class Engineer extends Profile{
    constructor(name, email, github){
        super(name, email);
        this.github = github;
        this.role = "e"
    }

}
module.exports = Engineer