const removeFromArray = function(arr, ...elements) {
    for (const e of elements) {
        while (arr.find(element => element === e))
            arr.splice(arr.findIndex(element => element === e), 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
