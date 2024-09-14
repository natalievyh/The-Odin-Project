const fibonacci = function(num) {
    if (num < 0) { return "OOPS"; }
    let fib_arr = [0, 1];
    for (let i = 2; i <= num; ++i) {
        fib_arr[i] = fib_arr[i-1] + fib_arr[i-2];
    }
    return fib_arr[num];
};

// Do not edit below this line
module.exports = fibonacci;
