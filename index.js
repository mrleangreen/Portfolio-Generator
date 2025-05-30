const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./template.js');

inquirer.prompt([
    { type: 'input', name: 'name', message: 'Enter your name:' },
    { type: 'input', name: 'location', message: 'Enter your location:' },
    { type: 'input', name: 'bio', message: 'Write a short bio:' },
    { type: 'input', name: 'linkedin', message: 'Enter your LinkedIn URL:' },
    { type: 'input', name: 'github', message: 'Enter your GitHub URL:' },
]).then(answers => {
    const htmlContent = generateHTML(answers);
    fs.writeFile('portfolio.html', htmlContent, (err) => {
        if (err) throw err;
        console.log('Portfolio HTML successfully generated as portfolio.html');
    });
});
