const inquirer = require("inquirer")
const fs = require("fs")
const Engineer = require("./modules/engineer")
const Intern = require("./modules/intern")
const Manager = require ("./modules/manager")

const job = [];

// const mainFunction = function(){
//     console.log("hello");
//     inquirer.prompt([
//     {
//     name: "jobType",
//     message: "What job role is this member?",
//     type: "list",
//     choices: ["manager", "engineer", "intern"]  
//     }

// ]).then((response) =>{
// if (response.jobtype === "manager"){
//     console.log("hi");
// }else if (response.jobtype === "engineer"){
//     console.log("hello");
// }else {
//     return
// }
// })
// }
// mainFunction()



// const memberDescriptions = [
//     this.name = "Name",
//     this.job = "Job",
//     this.email = "Email Address",
//     this.github = "GitHub Address"
// ];

// const person1 = new Intern("john", "john@email.com")
// console.log(person1)
// const person2 = new Engineer("husaam", "husaam@email.com", "husaam@github.com")
// console.log(person2.sayHi())

cardArray = []

const team = [
    new Manager("Hamzah", "hamzah@gmail.com", "#1320"),
    new Engineer("Ben", "benjamin@gmail.com", "benj@github.com"),
    new Engineer("Sami", "sami1997@hotmail.com", "sami1997@github.com"),
    new Intern("Sarah", "saraht@gmail.com", "Aston University")
]
console.log(team[1].role)
// for(i=0; i<team.length; i++){
//     if(team[i].jobRole === "e"){
//         print("hello e!!!")
//     }else if(team[i].jobRole === "m"){
//         print("hello m!!!")
//     }else if (team[i].jobRole === "i"){
//         print("hello i!!!")
//     } else return
// }
// const htmlContent = [
//     {person1.returnInfo()},

// ]


//fs.writeFile('/index.html', htmlContent, (error) =>  err ? console.error(err) : console.log('Commit logged!'))