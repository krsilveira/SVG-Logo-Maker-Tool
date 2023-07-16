// PACKAGES for application

const inquirer = require('inquirer');
const fs = require('fs');


// Subclass Shapes: Triangle, Square, Circle

const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');
const Circle = require('./lib/circle.js');


// Array questions for the Users input

const questions = [
    {
        type: 'input',
        name: 'logoName',
        message: 'Enter three character logo name:',
        validate: async (input) => {
            if (input.length >3) {
                return 'Please limit logo name to three characters';
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'logoColor',
        message: 'Enter the text color (if hexadecimal add leading #):',
    },
    {
        type: 'list',
        name: 'shapeName',
        message: 'Enter a logo shape:',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (if hexadecimal add leading #):',
    }
  ];


//  README file

function writeToFile(answers) {

    const {logoName, logoColor, shapeName, shapeColor} = answers;

    let svgContent = `<?xml version="1.0" standalone="no"?>
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">`;


    // shape added to svgContent based on the Users input using OOP

    if (shapeName === 'circle') {
        const newCircle = new Circle(shapeColor);
        svgContent = `${svgContent}\n${(newCircle.render())}`;
    } else if (shapeName === 'triangle') {
        const newTriangle = new Triangle(shapeColor);
        svgContent = `${svgContent}\n${(newTriangle.render())}`;
    } else if (shapeName === 'square') {
        const newSquare = new Square(shapeColor);
        svgContent = `${svgContent}\n${(newSquare.render())}`;
    } 


    // Added text to svgContent based on the Users input

    svgContent = `${svgContent}
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Verdana" font-size="55" fill="${logoColor}"> ${logoName} </text>
    </svg>`;


    //  New svg is written to file

    fs.writeFile('logo.svg', svgContent, (err) =>
        err ? console.error(err) : console.log('Generated logo.svg')
    );
}


// App initialization

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile(answers);
    });

    
}

// Function Call to initialize app
init();