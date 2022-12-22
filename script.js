const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./modules/engineer");
const Intern = require("./modules/intern");
const Manager = require("./modules/manager");
const { type } = require("os");

let htmlContent = `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="profile.css">
</head>
<body>
<h1>Team Profile</h1>`;

const profileData = []

const managerInq = async function () {
  const inputs = await inquirer.prompt([
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
    },
  ]);
  inputs.role = "m"
  profileData.push(inputs)
  console.log(profileData);
  console.log(profileData[0].managerName)
  repeatFunction(profileData);
};

const engineerInq = async function () {
  const inputs = await inquirer.prompt([
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
    },
  ]);
  inputs.role = "e"
  profileData.push(inputs)
  //console.log(profileData);
  repeatFunction(profileData);
};

const internInq = async function () {
  const inputs = await inquirer.prompt([
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
    },
  ]);
  inputs.role = "i"
  profileData.push(inputs)
  //console.log(profileData);
  repeatFunction(profileData);
};
//fs.writeFile('/index.html', htmlContent, (error) =>  err ? console.error(err) : console.log('Commit logged!'))



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

// const team = [
//   new Manager("Hamzah", "hamzah@gmail.com", "#1320"),
//   new Engineer("Ben", "benjamin@gmail.com", "benj@github.com"),
//   new Engineer("Sami", "sami1997@hotmail.com", "sami1997@github.com"),
//   new Intern("Sarah", "saraht@gmail.com", "Aston University"),
// ];

// for (const member of team) {
// }

appendProfiles = (profileData) =>{
for (i = 0; i < profileData.length; i++) {
  if (profileData[i].role === "m") {
    console.log("hello Manager!!!");
    htmlContent += `<div class="member" id='member${i}'>
        <ul>
        <li>Name:${profileData[i].managerName}</li>
        <li>Role:Manager</li>
        <li>ID:${profileData[i].id} </li>
        <li>Email:${profileData[i].managerEmail}</li>
        <li>OfficeNumber:${profileData[i].managerOfficeNo} </li>
        </ul>
        </div>
        `;
  } else if (profileData[i].role === "e") {
   // console.log("hello Engineer");
    htmlContent += `<div class="member" id='member${i}'>
        <ul>
        <li>Name:${profileData[i].engineerName}</li>
        <li>Role:Engineer</li>
        <li>ID:${profileData[i].id} </li>
        <li>Email:${profileData[i].engineerEmail}</li>
        <li>GitHub:${profileData[i].engineerGitHub} </li>
        </ul>
        </div>
        `;
  } else if (profileData[i].role === "i") {
   // console.log("hello Intern!!!");
    htmlContent += `<div class="member" id='member${team[i].id}'>
        <ul>
        <li>Name:${profileData[i].internName}</li>
        <li>Role:Intern</li>
        <li>ID:${profileData[i].id} </li>
        <li>Email:${profileData[i].internEmail}</li>
        <li>School:${profileData[i].internSchool} </li>
        </ul>
        </div>
        `;
  } else return;
}
console.log(htmlContent)
};



const mainFunction = async function () {
    //console.log("hello mainF");
    const response = await inquirer.prompt([
      {
        name: "jobType",
        message: "What job role is this member?",
        type: "list",
        choices: ["manager", "engineer", "intern"],
      },
    ]);
  
    if (response.jobType === "manager") {
      await managerInq();
    } else if (response.jobType === "engineer") {
      await engineerInq();
    } else if (response.jobType === "intern") {
      await internInq();
    } else {
      return;
    }
};
  
mainFunction();

const endBoiler = (htmlContent) => {htmlContent += `</div>
</main>
</body>
</html>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>    
`;
}
const repeatFunction = async function (profileData) {
  const repeat = await inquirer.prompt({
    name: "additionalMem",
    message: "Add another member?",
    type: "list",
    choices: ["Yes", "No"],
  });
  console.log(repeat.additionalMem);
  if (repeat.additionalMem === "Yes") {
    await mainFunction();
  } else {
    console.log("This is the end of the app!")
    console.log(profileData)
    appendProfiles(profileData)
    endBoiler()

    //htmlPrint();
  }
};

htmlPrint = () => {
  fs.writeFile("./public/index.html", htmlContent, (err) =>
    err ? console.error(err) : console.log("Commit logged!")
  );
};