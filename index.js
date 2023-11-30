// Take an array of numbers and return the sum.
function getSum(numArr) {
    return numArr.reduce((sum, currentNum) => sum + currentNum);
};

console.log(getSum([3, 6, 7, 2, 1, 5]));

// Take an array of numbers and return the average.
function getAvg(numArr) {
    return getSum(numArr) / numArr.length;
};

console.log(getAvg([3, 6, 7, 2, 1, 5]));

// Take an array of strings and return the longest string.
function longestStr(strArr) {
    return strArr.reduce((str1, str2) => str1.length > str2.length ? str1 : str2);
}

console.log(longestStr(['Jujubes', 'cheesecake', 'pie', 'wafer', 'donut', 'toffee']));


// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
function stringsLongerThan(wordArr, num) {
    return wordArr.filter(word => word.length > num);
}

console.log(stringsLongerThan(['Jujubes', 'cheesecake', 'pie', 'wafer', 'donut', 'toffee'], 5));

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function print1ToNum(num) {
    return num === 1 ? 1 : `${print1ToNum(num - 1)} ${num}`;
}

console.log(print1ToNum(100));