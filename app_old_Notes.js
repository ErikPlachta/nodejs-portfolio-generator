//----------------------------------------------------------------------------//
//-- START --> Getting User Input

//-- Extract user input into const
const profileDataArgs = process.argv.slice(2, process.argv.length);

//-- grab first value as name
// const name = profileDataArgs[0];

//-- grab second seclond as github
// const github = profileDataArgs[1];

//-- Grabbing first two arguments from input, storing as variables
const [name, github] = profileDataArgs;

// console.log(profileDataArgs);

// Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++) {
      console.log(profileDataArr[i]);
    }
  };
// printProfileData(profileDataArgs);


  //-- END--> Getting User Input
//----------------------------------------------------------------------------//
//-- START --> Building Page

//-- testing to verify variables coming through
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
//-- testing to verify variables in multi line
// const generatePage = (userName, githubName) => {
//   return `
//     Name: ${userName}
//     GitHub: ${githubName}
//   `;
// };
//-- Hardcoded testing
// console.log(generatePage('Jane', 'janehub'));

//-- Building webpage with content
const generatePage = (name, github) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;
};

//-- Testing dynamic printing based on supplied var
// console.log(generatePage(name, github));

//-- importing fs module into variable fs
const fs = require('fs');
//-- writing file
fs.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});