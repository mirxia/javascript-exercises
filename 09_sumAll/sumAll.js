const { error } = require("selenium-webdriver");

const sumAll = function(a, b) {
    for (let i = 0; i < arguments.length; i++) {
        if (Number.isInteger(arguments[i]) === false || arguments[i] < 0) {
            return "ERROR";
        }
    }
    const args = Array.from(arguments).sort((a,b) => a - b);
    let sum = 0;
    for (let i = args[0]; i <= args[1]; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
