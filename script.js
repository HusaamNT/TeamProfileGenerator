const inquirer = require("inquirer")
const fs = require("fs")
const Engineer = require("./modules/engineer")
const Intern = require("./modules/intern")
const Manager = require ("./modules/manager")

const htmlContent = (`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="profile.css">
</head>
<body>`)


//fs.writeFile('/index.html', htmlContent, (error) =>  err ? console.error(err) : console.log('Commit logged!'))

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

const team = [
    new Manager("Hamzah", "hamzah@gmail.com", "#1320"),
    new Engineer("Ben", "benjamin@gmail.com", "benj@github.com"),
    new Engineer("Sami", "sami1997@hotmail.com", "sami1997@github.com"),
    new Intern("Sarah", "saraht@gmail.com", "Aston University")
]

for(i=0; i<team.length; i++){
    if(team[i].role === "m"){
        console.log("hello Manager!!!")
        job.push(`<div class="member" id='member${team[i].id}'>
        <ul>
        <li>Name:${team[i].name}</li>
        <li>Role:Manager</li>
        <li>ID:${team[i].id} </li>
        <li>Email:${team[i].email}</li>
        <li>OfficeNumber:${team[i].officeNo} </li>
        </ul>
        </div>
        `)
    }else if(team[i].role === "e"){
        console.log("hello Engineer")
        job.push(`<div class="member" id='member${team[i].id}'>
        <ul>
        <li>Name:${team[i].name}</li>
        <li>Role:Engineer</li>
        <li>ID:${team[i].id} </li>
        <li>Email:${team[i].email}</li>
        <li>GitHub:${team[i].github} </li>
        </ul>
        </div>
        `)
    }else if (team[i].role === "i"){
        console.log("hello Intern!!!")
        job.push(`<div class="member" id='member${team[i].id}'>
        <ul>
        <li>Name:${team[i].name}</li>
        <li>Role:Intern</li>
        <li>ID:${team[i].id} </li>
        <li>Email:${team[i].email}</li>
        <li>School:${team[i].school} </li>
        </ul>
        </div>
        `)
    } else return
}

job.push(`</div>
</main>
</body>
</html>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>    
`
)
const arrayCards = JSON.stringify(job)
console.log(arrayCards)
console.log(typeof arrayCards)
console.log(typeof ht)
const finalContent = htmlContent.push.arrayCards

console.log(finalContent)

//fs.writeFile('./public/index.html', htmlContent, (err) =>  err ? console.error(err) : console.log('Commit logged!'))




