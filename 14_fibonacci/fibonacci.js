const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }
    let res = 0;
    let next = 1;
    while (n != 0) {
        let temp = res;
        res = next;
        next = next + temp;
        n--;
    }
    return res;
};

// Do not edit below this line
module.exports = fibonacci;
