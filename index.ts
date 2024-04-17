#! /usr/bin/env node
//Import 'Inquirer' and 'Chalk' modules, which is a command line interface for Node.js
import inquirer from 'inquirer';
import chalk from 'chalk';

console.log(chalk.magentaBright.bold('\n \t "Welcome To codeWithSahil - Word Counter Application"'));

let condition:boolean=true;
while(condition){

//Declare a const 'answer' and assign it to the result of inquirer.prompt function
const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: 'Sentence',
        type: 'input',
        message: chalk.greenBright.bold('Enter Your Sentence To Count The Word :')
    }
]);
let words = answers.Sentence.trim().split(' ');
//print the array of words to the console
console.log(words);

//Print the count to the console
console.log(chalk.green(`\n \t Your Sentence Words Count Is : ${words.length}`));
let againAns=await inquirer.prompt([
    {
        name:'again',
        type:'confirm',
        message:chalk.greenBright.bold('Do You Want To Count Again ?'),
        default:false
    }
]);
condition=againAns.again;
}
console.log(chalk.grey.bold('\n \t Thanks You'));
