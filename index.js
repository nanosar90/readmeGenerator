// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = async () => {
    return await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project...'
        },
        {
            type: 'input',
            name: 'Technologies',
            message: 'What technologies/APIs did you use?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What do users need to install to run your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Are there minimal usage requirements?'
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'What do users need to do to contribute if opensource, or not?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Are there any test instructions?'
        },
        {
            type: 'list',
            message: 'Choose a license for your project',
            name: 'license',
            choices: ['Mozilla','Boost', 'MIT', 'Apache', 'GNU']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
    ])};

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
async function init () {
    const answers = await questions();
    const readMe = `
    
    # [$answers.name](${answers.name})
    ## License
    [${answers.license}](https://choosealicense.com/licenses/${answers.license}/)

    ### Table of Contents
    [Description](#description) 
    [Technologies](#technologies) 
    [Installation](#installation) 
    [Usage](#usage)
    [Contributing](#contributions)
    [Tests](#tests)
    [Questions](#Questions)


    ### Description
    ${answers.description}

    ### Technologies
    ${answers.Technologies}

    ### Installation
    ${answers.installation}

    ## Usage 
    ${answers.usage}

    ### Contributing
    ${answers.contributions}

    ## Tests
    ${answers.test}

    ## Questions
    If you have any questions please reach me at:
    GitHub Profile: [${answers.github}](https://github.com/${answers.github}) 
    Email: ${answers.email}

    
    `
    fs.writeFile('./readme/README.md', readMe, error=> {
        console.log(error)
    })
}

// Function call to initialize app
init();

