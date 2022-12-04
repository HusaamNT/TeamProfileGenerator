let nextId = 1;
class Profile {
    constructor(name, email, github){
    this.name = name;
    this.id = nextId++;
    this.email = email;
    this.github = github;
}}

module.exports = Profile;