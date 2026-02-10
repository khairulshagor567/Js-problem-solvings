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

let bookTitles = [];
let authorNames = [];
let copiesAvailable = [];

function createBookList(bookTitles, authorNames, copiesAvailable) {
    bookTitles.push(bookTitles);
    authorNames.push(authorNames);
    copiesAvailable.push(copiesAvailable);
}

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
    let sum = 0;
    let text = '';
    for (let i = 0; i < args.length; i++) {
        if(!isNaN(args[i])) {
            sum += Number(args[i]);
        } else {
            text += args[i] + ' ';
        }
    }    
    if(text.trim() !== '') {
        return text.trim();
    }    
    return sum;
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
        }
    }
}

console.log(getMaxProduct([2, 3, 5, 6, 7])); // Output: 42