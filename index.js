#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        message: "Guess any number between 1 to 6",
        type: "number",
        name: "Number"
    }
]);
if (answer.Number === randomNumber) {
    console.log("Correct guess");
}
else {
    console.log("Wrong guess");
}
