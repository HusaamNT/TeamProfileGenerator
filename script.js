const inquirer = require("inquirer")
const fs = require("fs")
const Engineer = require("./modules/engineer")
const Intern = require("./modules/intern")
const Manager = require ("./modules/manager")

const mainFunction = function(){
    console.log("hello");
    inquirer.prompt([
    {
    name: "jobType",
    message: "What job role is this member?",
    type: "list",
    choices: ["Manager", "Engineer", "Intern"]  
    }

]).then((response) =>
console.log(response.jobType))
}
mainFunction()



// const memberDescriptions = [
//     this.name = "Name",
//     this.job = "Job",
//     this.email = "Email Address",
//     this.github = "GitHub Address"
// ];


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// const person1 = new Intern("john", "john@email.com")
// console.log(person1)
// const person2 = new Engineer("husaam", "husaam@email.com", "husaam@github.com")
// console.log(person2.sayHi())

// fs.writeFile('/my-page.html', htmlContent, (error) => { /* handle error */ });