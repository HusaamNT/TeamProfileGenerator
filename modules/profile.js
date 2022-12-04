let nextId = 1;
class Profile {
    constructor(name, job, email, github){
    this.name = name;
    this.id = nextId++;
    this.job = job;
    this.email = email;
    this.github = github;
}}

module.exports = Profile;