
const fs = require('fs'); //-- 12/26/2021 #EP || Commented out, not needed at this time
const generatePage = require('./src/page-template'); //-- 12/26/2021 #EP || Commented out, not needed at this time

const pageHTML = generatePage(name, github); //-- 12/26/2021 #EP || Commented out, not needed at this time

fs.writeFile('./index.html', pageHTML, err => { //-- 12/26/2021 #EP || Commented out, not needed at this time
  if (err) throw err;
  console.log('Portfolio complete! Check out index.html to see the output!');
});