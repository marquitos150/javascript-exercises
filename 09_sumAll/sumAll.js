const sumAll = function(firstNum, lastNum) {
    if (typeof(firstNum) != "number" || typeof(lastNum) != "number") return "ERROR";
    if (Math.floor(firstNum) != firstNum || Math.floor(lastNum) != lastNum) return "ERROR";
    if (firstNum < 0 || lastNum < 0) return "ERROR";

    // flip numbers in case first number is larger so we can start with smaller number
    if (firstNum > lastNum) {
        let tempNum = firstNum;
        firstNum = lastNum;
        lastNum = tempNum;
    }

    let sum = 0;
    let currNum = firstNum;
    while (currNum <= lastNum) {
        sum += currNum;
        currNum++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
