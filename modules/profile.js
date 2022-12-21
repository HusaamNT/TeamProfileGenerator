let nextId = 1;
class Profile {
    constructor(name, email){
    this.name = name;
    this.id = nextId++;
    this.email = email;
}
    //sayHi(){
   //     return `Hi, my name is ${this.name}`
    //}
}

module.exports = Profile;