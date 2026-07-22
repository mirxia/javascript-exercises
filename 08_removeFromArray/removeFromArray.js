const removeFromArray = function() {
    const args = Array.from(arguments);
    return args[0].filter(item => args.indexOf(item) === -1)
};

// Do not edit below this line
module.exports = removeFromArray;
