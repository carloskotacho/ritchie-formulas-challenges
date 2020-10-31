const { exec } = require('child_process');
const clc = require("cli-color")

function Run(numberOne, numberTwo, operation) {
    console.log("Number operations")

    if(operation === 'sum'){
        exec(`echo '{ "number_one": "'${numberOne}'", "number_two": "'${numberTwo}'", "operation": "'${operation}'" }' | rit math sum numbers --stdin`);
    } else if (operation === 'multiply'){
        exec(`echo '{ "number_one": "'${numberOne}'", "number_two": "'${numberTwo}'", "operation": "'${operation}'" }' | rit math multiply numbers --stdin`);
    } else {
        console.log(clc.red("Arhhhh!!!"))
    }
}

const formula = Run
module.exports = formula
