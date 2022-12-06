const Profile = require("./profile")

class Engineer extends Profile{
    constructor(name, email, github){
        super(name, email);
        this.github = github;
    }
    sayHi(){
        return `Hi, I am an engineer named ${this.name}!`
    }
}

module.exports = Engineer