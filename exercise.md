# ALAB 308.5.1: Creating Reusable Functions

## Part 1: Thinking Functionally
1. To me, the second function makes the most sense: 
```javascript
function reverseString2(str) {
  return str.split("").reverse().join("");
}
```

This code is short, readable, and efficient. The methods used, in addition to the function name, help understand what is happening in the code. I also considered one of the recursive options, however it is not as readable and is less efficient in terms of time complexity. 

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

## Part 3: Thinking Critically

## Part 4: Thinking Practically

## Part 5: Thinking Back