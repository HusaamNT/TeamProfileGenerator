const inquirer = require("inquirer")
const fs = require("fs")
const Engineer = require("./modules/engineer")
const Intern = require("./modules/intern")
const Manager = require ("./modules/manager")
const { type } = require("os")

let htmlContent = (`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="profile.css">
</head>
<body>`)

const managerInq = function(){
    inquirer.prompt([
        {
            name: "managerName",
            message: "Name:",
            type: "input",
        },
        {
            name: "managerEmail",
            message: "Email:",
            type: "input",
        },
        {
            name: "managerOfficeNo",
            message: "Office Number:",
            type: "input",
        }
    ]).then((response) =>{
    return new Manager(response.managerName, response.managerEmail, response.managerOfficeNo)
    })  
    }
const engineerInq = function(){
    inquirer.prompt([
        {
            name: "engineerName",
            message: "Name:",
            type: "input",
        },
        {
            name: "engineerEmail",
            message: "Email:",
            type: "input",
        },
        {
            name: "engineerGitHub",
            message: "GitHub:",
            type: "input",
        }
    ]
    ).then((response) =>{
    return new Engineer(response.engineerName, response.engineerEmail, response.engineerGitHub)})
    }

const internInq = function(){
    inquirer.prompt([
        {
            name: "internName",
            message: "Name:",
            type: "input",
        },
        {
            name: "internEmail",
            message: "Email:",
            type: "input",
        },
        {
            name: "internSchool",
            message: "School:",
            type: "input",
        }
    ])
    .then((response) =>{
        return new Intern(response.internName, response.internEmail, response.internSchool)
    })
}
//fs.writeFile('/index.html', htmlContent, (error) =>  err ? console.error(err) : console.log('Commit logged!'))

const job = [];

const mainFunction = function(){
    console.log("hello");
    inquirer.prompt([
    {
    name: "jobType",
    message: "What job role is this member?",
    type: "list",
    choices: ["manager", "engineer", "intern"]  
    }
]).then((response) =>{
if (response.jobType === "manager"){
    managerInq();
}else if (response.jobType === "engineer"){
    engineerInq();
}else if (response.jobType === "intern"){
    internInq();
}else{
    return
}
})
}

mainFunction()
const repeatFunction = function(){
inquirer.prompt([
    {
        name: "additionalMem",
        message: "Add another member?",
        type: "list",
        list: ["Yes", "No"],
    }]
    .then((response) =>{
        if (response.additionalMem === "yes"){
            mainFunction()
        }else{
            return
        }
    }
))
}
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

const team = [
    new Manager("Hamzah", "hamzah@gmail.com", "#1320"),
    new Engineer("Ben", "benjamin@gmail.com", "benj@github.com"),
    new Engineer("Sami", "sami1997@hotmail.com", "sami1997@github.com"),
    new Intern("Sarah", "saraht@gmail.com", "Aston University")
]

for (const member of team) {

}

for(i=0; i<team.length; i++){
    if(team[i].role === "m"){
        console.log("hello Manager!!!")
        htmlContent += `<div class="member" id='member${team[i].id}'>
        <ul>
        <li>Name:${team[i].name}</li>
        <li>Role:Manager</li>
        <li>ID:${team[i].id} </li>
        <li>Email:${team[i].email}</li>
        <li>OfficeNumber:${team[i].officeNo} </li>
        </ul>
        </div>
        `
    }else if(team[i].role === "e"){
        console.log("hello Engineer")
        htmlContent += `<div class="member" id='member${team[i].id}'>
        <ul>
        <li>Name:${team[i].name}</li>
        <li>Role:Engineer</li>
        <li>ID:${team[i].id} </li>
        <li>Email:${team[i].email}</li>
        <li>GitHub:${team[i].github} </li>
        </ul>
        </div>
        `
    }else if (team[i].role === "i"){
        console.log("hello Intern!!!")
        htmlContent += `<div class="member" id='member${team[i].id}'>
        <ul>
        <li>Name:${team[i].name}</li>
        <li>Role:Intern</li>
        <li>ID:${team[i].id} </li>
        <li>Email:${team[i].email}</li>
        <li>School:${team[i].school} </li>
        </ul>
        </div>
        `
    } else return
}

htmlContent += `</div>
</main>
</body>
</html>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>    
`

fs.writeFile('./public/index.html', htmlContent, (err) =>  err ? console.error(err) : console.log('Commit logged!'))




