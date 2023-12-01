// Part 1: Thinking Functionally 

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


// Part 2: Thinking Methodically

const arr = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }];

// Sort the array by age.
function sortByAge(objArr) {
    return objArr.sort((obj1, obj2) => obj1.age - obj2.age);
}

console.log(sortByAge(arr));

// Filter the array to remove entries with an age greater than 50.
function filterOutOver50(objArr) {
    return objArr.filter(obj => obj.age <= 50);
}

console.log(filterOutOver50(arr));

// Map the array to change the “occupation” key to “job” and increment every age by 1.
function changeJobAndAgeUp(objArr) {
    return objArr.map(obj => {
        const age = parseInt(obj.age) + 1;
        obj.age = age.toString();

        obj['job'] = obj['occupation'];
        delete obj['occupation'];

        return obj;
    });
}

console.log(changeJobAndAgeUp(arr));

// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.
// Already did it that way above haha

// Part 3: Thinking Critically

// Take an object and increment its age field.
function incrementAge(obj) {
    if (!obj.hasOwnProperty('age')) {
        obj.age = 0;
    }
    obj.age = parseInt(obj.age) + 1;

};

const person = {
    name: 'Britt', 
    age: '25', 
    favoriteColor: 'green'
};

incrementAge(person);
console.log(person);

// Take an object, make a copy, and increment the age field of the copy. Return the copy.
function copyAndIncrementAge(obj) {
    const objCopy = JSON.parse(JSON.stringify(obj));
    incrementAge(objCopy);
    return objCopy;
};

const person2 = {
    name: 'Megan', 
    age: '36', 
    favoriteColor: 'yellow'
};

console.log(copyAndIncrementAge(person2));
console.log(person2);