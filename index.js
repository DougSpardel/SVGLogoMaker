import inquirer from 'inquirer';

import fs from 'fs';
import { Triangle, Circle, Square } from './lib/shapes.js';

const promptUser = async () => {
    const answers = await inquirer.prompt([
        {
            name: 'text',
            message: 'Enter up to three characters for the logo text:',
            validate: input => input.length <= 3 ? true : 'Text can only be up to 3 characters long.'
        },
        {
            name: 'textColor',
            message: 'Enter the text color:',
            default: 'white'
        },
        {
            name: 'shapeType',
            message: 'Choose a shape:',
            type: 'list',
            choices: ['circle', 'triangle', 'square']
        },
        {
            name: 'shapeColor',
            message: 'Enter the shape color:',
            default: 'green'
        }
    ]);

    return answers;
};

const createLogo = (answers) => {
    let shape;
    switch (answers.shapeType) {
        case 'triangle':
            shape = new Triangle(answers.shapeColor);
            break;
        case 'circle':
            shape = new Circle(answers.shapeColor);
            break;
        case 'square':
            shape = new Square(answers.shapeColor);
            break;
    }

    const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="150" y="125" font-family="Verdana" font-size="35" fill="${answers.textColor}" text-anchor="middle">${answers.text}</text>
</svg>
`;

    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
};

const main = async () => {
    try {
        const answers = await promptUser();
        createLogo(answers);
    } catch (error) {
        console.error('Error generating logo:', error);
    }
};

main();
