# ALAB 308.5.1: Creating Reusable Functions

## Part 1: Thinking Functionally
1. In the lab, there are five functions that accomplish the same task. If you were looking at this code for the first time, which would make the most sense to you?
- To me, the second function makes the most sense: 
```javascript
function reverseString2(str) {
  return str.split("").reverse().join("");
}
```

- This code is short, readable, and efficient. The methods used, in addition to the function name, help understand what is happening in the code. I also considered one of the recursive options, however it is not as readable and is less efficient in terms of time complexity. 

2. Take an array of numbers and return the sum.
```javascript
function getSum(numArr) {
    return numArr.reduce((sum, currentNum) => sum + currentNum);
}
```
3. Take an array of numbers and return the average.
```javascript
function getAvg(numArr) {
    return getSum(numArr) / numArr.length;
}
```
4. Take an array of strings and return the longest string.
```javascript
function longestStr(strArr) {
    return strArr.reduce((str1, str2) => str1.length > str2.length ? str1 : str2);
}
```
5. Take an array of strings, and a number and return an array of the strings that are longer than the given number. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
```javascript
function stringsLongerThan(wordArr, num) {
    return wordArr.filter(word => word.length > num);
}
```
6. Take a number, n, and print every number between 1 and n without using loops. Use recursion.
```javascript
function print1ToNum(num) {
    return num === 1 ? 1 : `${print1ToNum(num - 1)} ${num}`;
}
```

## Part 2: Thinking Methodically
1. Sort the array by age.
```javascript
function sortByAge(objArr) {
    return objArr.sort((obj1, obj2) => obj1.age - obj2.age);
}
```
2. Filter the array to remove entries with an age greater than 50.
```javascript
function filterOutOver50(objArr) {
    return objArr.filter(obj => obj.age <= 50);
}
```
3. Map the array to change the “occupation” key to “job” and increment every age by 1.
```javascript
function changeJobAndAgeUp(objArr) {
    return objArr.map(obj => {
        const age = parseInt(obj.age) + 1;
        obj.age = age.toString();

        obj['job'] = obj['occupation'];
        delete obj['occupation'];

        return obj;
    });
}
```
4. Use the reduce method to calculate the sum of the ages. Then use the result to calculate the average age.
```javascript
function getSumOfAges(objArr) {
    return objArr.reduce((sumOfAges, person) => parseInt(sumOfAges) + parseInt(person['age']), 0);
}

function getAvgAge(objArr) {
    return getSumOfAges(objArr) / Object.keys(objArr).length;
}
```

## Part 3: Thinking Critically
1. Take an object and increment its age field.
```javascript
function incrementAge(obj) {
    if (!obj.hasOwnProperty('age')) {
        obj.age = 0;
    }
    obj.age = parseInt(obj.age) + 1;
    obj.updated_at = new Date().toString();
}
```
2. Take an object, make a copy, and increment the age field of the copy. Return the copy.
```javascript
function copyAndIncrementAge(obj) {
    const objCopy = JSON.parse(JSON.stringify(obj));
    incrementAge(objCopy); 
    return objCopy;
}
```

Note: For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.

3. Thought experiment: since the Date object is an object, what would happen if we modified it in the copy of the object created in the second function using setTime() or another method? How could we circumvent potentially undesired behavior?
- In the way I wrote these functions, the updated_at prop holds a string that was converted from a Date object, therefore the setTime() method isn't immediately available to modify this prop without turning it back into a Date object.