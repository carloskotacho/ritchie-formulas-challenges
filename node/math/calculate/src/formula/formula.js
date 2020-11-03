const clc = require("cli-color")

function execute(command) {
    const { exec } = require('child_process');

    exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    })
}

function Run(numberOne, numberTwo, operation) {
    console.log("Number operations")

    var stdin = `echo '{ "number_one": "'${numberOne}'", "number_two": "'${numberTwo}'", "operation": "'${operation}'" }'`

    switch (operation) {
        case 'sum':
            execute(stdin + ` | rit node math sum numbers --stdin`)
        break;
        case 'multiply':
            execute(stdin + ` | rit node math multiply numbers --stdin`)
        break;
        case 'subtract':
            execute(stdin + ` | rit node math subtract numbers --stdin`)
        break;
        default:
            console.log(clc.red("(Invalid Input) Use sum, multiply or subtract!"))
    }
}

const formula = Run
module.exports = formula
