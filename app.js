/*
Problem 1:

Write a function `calculateStrikeRate` that takes in two parameters - the runs scored by a batsman and the total number of balls they faced. The function should return the batsman's strike rate, which is calculated as the number of runs scored per 100 balls faced.
For example, if the batsman scored 45 runs off 30 balls, their strike rate would be calculated as follows:
(45 / 30) * 100 = 150
*/

function calculateStrikeRate(runs, balls) {
  if (balls === 0) {
    return 0;
  }
  return ((runs / balls) * 100).toFixed(2);
}

//console.log(calculateStrikeRate(45,30));

/*
Problem 2:

Have the function `CountPairs` take in a string of lowercase letters and digits. The function should return the count of all pairs of characters in the string that add up to an even number.

For example, if the input string is "a1b2c3d4e5f6", there are 3 pairs that add up to an even number: "b2", "d4", and "f6". So the function should return 3.

If there are no such pairs, the function should return 0.
*/

function CountPairs(str) {
    let count = 0;
    for (let i = 0; i < str.length - 1; i++) {
        const char2 = str[i + 1];
        if(char2 % 2 == 0) {
            count++;
        }
    }
    return count;
}
//console.log(CountPairs("a2b2c2d2")); // Output: 3

/*
Problem 3:

Write a function called `reverseString` that takes a string as input and returns the reverse of that string. Your function should not use the built-in `reverse()` method.
*/

function reverseString(str)
{
  let text = "";
  let stringLength = str.length-1;

  for (let index = stringLength; index>=0; index--) {
    text += str[index];
    //console.log(text);
  }
 return text;

}

let result = reverseString("12345");
//console.log(result);


/*
Problem 4:

Write a function isPalindrome that takes in a string and returns true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.
*/

function isPalindrome(data)
{
  let firstData = data;
  let reversed= data.split("").reverse().join("");
  return firstData===reversed;

}

let strResult  = isPalindrome("madam");
//console.log(strResult);

/*
Problem 5:

Write a function `mergeArrays` that takes in two arrays of integers and returns a new array that contains all the elements from both arrays, sorted in ascending order.

For example, if the two input arrays are:

[1, 3, 5, 7, 9]

[2, 4, 6, 8, 10]

The function should return the following array:

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Example Input/Output:

- mergeArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

- mergeArrays([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

- mergeArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]
*/

function mergeArrays (arr1,arr2)
{
  const newArray = [...arr1,...arr2];
  return finalArray = newArray.sort(function(a,b){return a-b});
  //console.log(newArray);
}

let newResult = mergeArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]);
//console.log(newResult);

/*
Problem 6:

Write a function called `findShortestWord` that takes in a string as a parameter and returns the shortest word in the string. If there are two or more words that are the same length and shortest, return the first word from the string with that length. Ignore punctuation and assume the string will not be empty. Words may also contain numbers.

For example, if the input string is "The quick brown fox jumps over the lazy dog", the function should return "The".

Example Input/Output:

- findShortestWord("The quick brown fox jumps over the lazy dog") should return "The"

- findShortestWord("Hello world") should return "world"

- findShortestWord("Today is Monday") should return "is"
*/

function findShortestWord (str) {
  let words = str.split(" ");
  let shortString = words[0];
  for(let word of words){
    //console.log(word);
    if (word.length <shortString.length)
    {
      shortString=word;
    }
  }
  return shortString;
}

//console.log(findShortestWord("The quick brown fo jumps over the lazy dog"));

/*
Problem 7:

Suppose you are building a student database for your class that will track student’s names and their marks. Your class has 40 students but now you are seeing that there are 41 entries in your database so you decide to check the database. And you find out that you have mistakenly uploaded a student’s name twice.

Task

 Write a `removeDuplicates` function that takes in an array of names and returns a new array with any duplicates removed.

Sample Input:

Student_names = [‘Zara’, ‘Sadia’ , ‘Mahin’ , ‘Adnan’ , ‘Maisha’, ‘Adnan’, ‘Faiyaz’]

Sample Output :

Student_names = [‘Zara’, ‘Sadia’ , ‘Mahin’ , ‘Adnan’ , ‘Maisha’, ‘Faiyaz’]
*/
const student =  ['Zara', 'Sadia' , 'Mahin' , 'Adnan' , 'Maisha', 'Adnan', 'Faiyaz'];

function removeDuplicates(names) {
    const uniqueNames = [];
    for (let i = 0; i < names.length; i++) {
        if(!uniqueNames.includes(names[i])) {
            uniqueNames.push(names[i]);
        }
    }
    return uniqueNames;
}
//console.log(removeDuplicates(student)); 


/*
Problem 8:

You are giving a book stall at Dhaka International book fair and need to create a list of books to be featured at the event.

Task:

    Write a function `createBookList` that takes in three parameters: `bookTitles`, an array of book titles, `authorNames`, an array of corresponding author names and ‘number of copies available’ , an array of corresponding copies available for the book.
    Write a function ‘Add Copies’ that takes two parameters : `bookTitle` and the number of copies you are adding to that book. The function should add copies to that particular book.
    Write a function ‘Sell Book’ that takes two parameters : `bookTitle` and the number of copies you are selling of that book. The function should deduct copies of that particular book.
    Write a function ‘GetDetails’ that takes no parameters and returns all the titles of the book in the bookTitles array ,the author names of the book in the `authorNames’ array and the number of copies available of the corresponding books, which should be updated after adding or selling a book.

.

Sample Input:

    createBookList(‘Bohubrihi’ , ‘Humayun Ahmed’ , 10)
    Add Copies(‘Bohubrihi’ , 5)

    Updates number of copies available of Bohubrihi to 15)

    ‘Sell Book’(‘Bohubrihi’ , 3)

     Updates number of copies available of Bohubrihi to 12)

    ‘GetDetails’()

      Returns (“Bohubrihi” by “Humayun Ahmed” number of copies available 12)
*/

// let bookTitles = [];
// let authorNames = [];
// let copiesAvailable = [];

// function createBookList(bookTitles, authorNames, copiesAvailable) {
//     bookTitles.push(bookTitles);
//     authorNames.push(authorNames);
//     copiesAvailable.push(copiesAvailable);
// }

/*
Problem 9:

Write a Javascript Program that takes String as a parameter and checks if the parameters are number or text. If the parameters are numbers then it will return a summation of the numbers. If the parameters are not numbers then it will generate a text by concatenating the strings.

Sample Input:

    parseString(“21” , “24’ , “40”)
    parseString(“Hello” , “Alpha”)
    parseString(“Summer” , “2022”)

Sample Output:

    85
    Hello Alpha
    Summer 2022
*/

function parseString(...args) {
    const allNumbers = args.every(value => !isNaN(value));

    if (allNumbers) {
        let sum = 0;
        for (let value of args) {
            sum += Number(value);
        }
        return sum;
    } else {
        return args.join(" ");
    }
}

//console.log(parseString("21" , "24" , "40")); 

/*
Problem 10:

Given an array exists that has integers, write a function called "getPositiveNumbers" that takes the entire array as input and returns a new array containing only the positive numbers from the original array.

Sample Input : [2, -5, 10, -3, 8, -1, 0, 7]

Sample Output: [2, 10, 8, 7]
*/
function getPositiveNumbers(numbers) {
    const positiveNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] > 0) {
            positiveNumbers.push(numbers[i]);
        }
    }
    return positiveNumbers;
}
//console.log(getPositiveNumbers([2, -5, 10, -3, 8, -1, 0, 7]));


/*
Problem 11:

Write a function called "findMissingNumber" that takes an array of consecutive integers from 1 to n, with one number missing, and returns the missing number.

For example:

Input: [1, 2, 3, 5, 6, 7, 8]
*/

function findMissingNumber(arr) {
    const n = arr.length + 1;
    const totalActualSum = (n*(n + 1)) / 2;
    let totalGivenSum = 0;
    for (let i = 0; i < arr.length; i++) {
        totalGivenSum += arr[i];
    }
    return totalActualSum - totalGivenSum;
}    

//console.log(findMissingNumber([1, 2, 3, 5, 6, 7, 8])); // Output: 4

/*
Problem 12:

Write a function called "getMaxProduct" that takes an array of integers as input and returns the maximum product that can be obtained by multiplying any two distinct elements from the array.

Sample Input: [2, 3, 5, 6, 7]

Sample Output: 42 (obtained by multiplying 6 and 7)
*/

function getMaxProduct(arr) {
    let maxProduct = -Infinity;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            //console.log(arr[i], arr[j]);
            const product = arr[i] * arr[j];
            if(product > maxProduct) {
                maxProduct = product;
            }
        }
    }
    return maxProduct;
}

//console.log(getMaxProduct([1,2,3,4,5])); // Output: 42

/*
Problem 13:

Write a function called "findPrimeNumbers" that takes an array of positive integers as input and returns a new array containing only the prime numbers from the original array.

For example:

Input: [2, 3, 4, 5, 6, 7, 8, 9, 10]
*/

function isPrime(num) {
    if(num <=1){
        return false;
    }

    for(let i=2;i<=num/2;i++)
    {
        
        if(num % i === 0) {
            return false;
        }
    }
    return true;

   //
}
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = numbers.filter(isPrime);
//console.log(primeNumbers); // Output: [2, 3, 5, 7]

/*
Problem 14:
Write a program that prints a triangle asterisk (*). The number of rows in the triangle is determined by the user's input. Each row should contain a  string where the characters are repeated in a mirrored pattern.

For example, if the user inputs 5, the program should print:

      *

    ***

   ****

  *****

 ******
*/

const rows = 5;

for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let stars = "*".repeat(i);
    //console.log(spaces+stars+spaces);
}

/*
Problem 17:

Write a function called "findMedian" that takes an array of numbers as input and returns the median value of the numbers.

For example:

Input: [5, 2, 8, 1, 9]

Output: 5

Input: [4, 2, 7, 1, 9, 10]

Output: 5.5
*/

function findMedian(arr)
{
    arr.sort((a, b) => a - b);
    if (arr.length % 2 === 0) {
        const mid1 = arr.length / 2 - 1;
        const mid2 = arr.length / 2;
        return (arr[mid1] + arr[mid2]) / 2;
    } else {
        const mid = Math.floor(arr.length / 2);
        return arr[mid];
    }
    
}

console.log(findMedian([5, 2, 8, 1, 9])); // Output: 5

/*
Problem 18:
Write a function called ‘countCharacter’ that takes a string as parameters and returns an object with character count.
For Example:

Input: “Hello”

Output: {H:1, e:1, l: 2, o:1}
*/

// function countCharacter(str) {

// }
let str = "Hello";

const countCharacter = str.split('').reduce((acc, char) => {
  if(acc[char]){
    acc[char]++;
  }else{
    acc[char] = 1;
  }
  return acc;
},{});
//console.log(countCharacter); // Output: {H:1, e:1, l: 2, o:1}