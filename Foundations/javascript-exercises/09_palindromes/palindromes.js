const palindromes = function (string) {
    const valid = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const word = string
    .toLowerCase()
    .split("")
    .filter((char) => valid.includes(char))
    .join("");

    const reversed = word.split("").reverse().join("");
    return (word === reversed);
};

// Do not edit below this line
module.exports = palindromes;
