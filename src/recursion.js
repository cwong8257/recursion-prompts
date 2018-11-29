/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function (n) {
    if (n < 0) {
        return null;
    }

    if (n < 2) {
        return 1;
    }

    return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function (array) {
    if (array.length === 0) {
        return 0;
    }

    return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function (array) {
    if (array.length === 0) {
        return 0;
    }

    const first = array[0];
    const rest = array.slice(1);

    if (Array.isArray(first)) {
        return arraySum(first) + arraySum(rest);
    }

    return first + arraySum(rest);
};

// 4. Check if a number is even.
var isEven = function (n) {
    if (n === 0) {
        return true;
    }

    if (n === 1) {
        return false;
    }

    if (n < 0) {
        return isEven(n + 2);
    }

    return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (n) {
    if (n === 0) {
        return 0;
    }

    if (n < 1) {
        return n + 1 + sumBelow(n + 1);
    }

    return n - 1 + sumBelow(n - 1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function (x, y) {
    if (Math.abs(x - y) < 2) {
        return [];
    }

    if (x < y) {
        return range(x, y - 1).concat([y - 1]);
    }

    return range(x, y + 1).concat([y + 1]);

};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function (base, exp) {
    if (exp === 0) {
        return 1;
    }

    if (exp < 0) {
        return 1 / exponent(base, 0 - exp);
    }

    if (exp % 2 === 0) {
        return exponent(base * base, exp / 2);
    }

    return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function (n) {
    if (n === 1) {
        return true;
    };

    if (n < 1) {
        return false;
    }

    return n % 2 === 0 && powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function (string) {
    if (string.length === 0) {
        return '';
    }

    const first = string[0];
    const rest = string.slice(1);

    return reverse(rest) + first;
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function (string) {
    if (string.length < 2) {
        return true;
    }

    const first = string[0].toLowerCase();
    const last = string[string.length - 1].toLowerCase();
    const rest = string.slice(1, string.length - 1);

    return first === last && palindrome(rest);
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function (x, y) {
    if (y === 0) {
        return NaN;
    }

    if (x < 0 && y < 0) {
        return 0 - modulo(-x, -y);
    }

    if (x > 0 && y < 0) {
        return y + modulo(x, -y);
    }

    if (x < 0 && y > 0) {
        return modulo(y, -x) - y;
    }

    if (x < y) {
        return x;
    }

    return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function (x, y) {
    if (x === 0 || y === 0) {
        return 0;
    }

    if (x < 0 && y < 0) {
        return multiply(-x, -y);
    }

    if (y < 0) {
        return multiply(y, x);
    }

    return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function (x, y) {
    if (y === 0) {
        return NaN;
    }

    if (x < 0 && y < 0) {
        return divide(-x, -y);
    }

    if (x < 0) {
        return 0 - divide(-x, y);
    }

    if (y < 0) {
        return 0 - divide(x, -y);
    }

    if (x < y) {
        return 0;
    }

    return 1 + divide(x - y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function (x, y) {
    if (x < 0 || y < 0) {
        return null;
    }

    if (x === 0) {
        return y;
    }

    if (y === 0) {
        return x;
    }

    if (x < y) {
        gcd(y, x);
    }

    const remainder = x % y;

    return gcd(y, remainder);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function (str1, str2) {
    if (str1.length === 0 && str2.length === 0) {
        return true;
    }

    const first1 = str1[0];
    const first2 = str2[0];
    const rest1 = str1.slice(1);
    const rest2 = str2.slice(1);

    return first1 === first2 && compareStr(rest1, rest2);
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function (str) {
    if (str.length === 0) {
        return [];
    }

    const first = str[0];
    const rest = str.slice(1);

    return [first].concat(createArray(rest));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
    if (array.length === 0) {
        return [];
    }

    const first = array[0];
    const rest = array.slice(1);

    return reverseArr(rest).concat(first);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function (value, length) {
    if (length === 0) {
        return [];
    }

    return [value].concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function (n) {
    if (n === 0) {
        return [];
    }

    if (n % 15 === 0) {
        return fizzBuzz(n - 1).concat('FizzBuzz');
    }

    if (n % 3 === 0) {
        return fizzBuzz(n - 1).concat('Fizz');
    }

    if (n % 5 === 0) {
        return fizzBuzz(n - 1).concat('Buzz');
    }

    return fizzBuzz(n - 1).concat(n.toString());
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function (array, value) {
    if (array.length === 0) {
        return 0;
    }

    const first = array[0];
    const rest = array.slice(1);

    if (first === value) {
        return 1 + countOccurrence(rest, value);
    }

    return countOccurrence(rest, value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function (array, callback) {
    if (array.length === 0) {
        return [];
    }

    const first = array[0];
    const rest = array.slice(1);

    return [callback(first)].concat(rMap(rest, callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function (obj, key) {
    let count = 0;

    for (let k in obj) {
        if (k === key) {
            count++;
        }

        const val = obj[k];

        if (typeof val === 'object') {
            count += countKeysInObj(val, key);
        }
    }

    return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function (obj, value) {
    let count = 0;

    for (let key in obj) {
        const val = obj[key];

        if (val === value) {
            count++;
        }

        if (typeof val === 'object') {
            count += countValuesInObj(val, value);
        }
    }

    return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function (obj, oldKey, newKey) {
    for (let key in obj) {
        const val = obj[key];

        if (key === oldKey) {
            obj[newKey] = val;
            delete obj[key];
        }

        if (typeof val === 'object') {
            replaceKeysInObj(val, oldKey, newKey);
        }
    }

    return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function (n) {
    if (n <= 0) {
        return null;
    }

    if (n === 1) {
        return [0, 1];
    }

    const subCase = fibonacci(n - 1);

    return subCase.concat(subCase[subCase.length - 1] + subCase[subCase.length - 2]);
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function (n) {
    if (n < 0) {
        return null;
    }

    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function (array) {
    if (array.length === 0) {
        return [];
    }

    const first = array[0];
    const rest = array.slice(1);

    return [first.toUpperCase()].concat(capitalizeWords(rest));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function (array) {
    if (array.length === 0) {
        return [];
    }

    const first = array[0];
    const rest = array.slice(1);

    return [first[0].toUpperCase() + first.slice(1)].concat(capitalizeFirst(rest));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function (obj) {
    let sum = 0;

    for (let key in obj) {
        const val = obj[key];

        if (typeof val === 'number' && val % 2 === 0) {
            sum += val;
        }

        if (typeof val === 'object') {
            sum += nestedEvenSum(val);
        }
    }

    return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function (array) {
    if (array.length === 0) {
        return [];
    }

    const first = array[0];
    const rest = array.slice(1);

    if (Array.isArray(first)) {
        return flatten(first).concat(flatten(rest));
    }

    return [first].concat(flatten(rest));
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function (str, obj = {}) {
    if (str.length === 0) {
        return obj;
    }

    const first = str[0];
    const rest = str.slice(1);

    if (obj[first] === undefined) {
        obj[first] = 0;
    }

    obj[first]++;

    return letterTally(rest, obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function (list) {
    if (list.length < 2) {
        return list;
    }

    const first = list[0];
    const second = list[1];
    const rest = list.slice(2);

    if (first === second) {
        return compress([second].concat(rest));
    }

    return [first].concat(compress([second].concat(rest)));
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function (array, aug) {
    if (array.length === 0) {
        return [];
    }

    const first = array[0];
    const rest = array.slice(1);

    return [first.concat(aug)].concat(augmentElements(rest, aug));
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function (array) {
    if (array.length < 2) {
        return array;
    }

    const first = array[0];
    const second = array[1];
    const rest = array.slice(2);

    if (first === 0 && second === 0) {
        return minimizeZeroes([second].concat(rest));
    }

    return [first].concat(minimizeZeroes([second].concat(rest)));
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array) {
    if (array.length === 0) {
        return [];
    }

    if (array.length === 1) {
        return [Math.abs(array[0])];
    }

    let first = array[0];
    let second = array[1];
    const rest = array.slice(2);

    if (first < 0) {
        first *= -1;
    }

    if (second > 0) {
        second *= -1;
    }

    return [first, second].concat(alternateSign(rest));
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function (str) {
    if (str.length === 0) {
        return '';
    }

    let first = str[0];
    const rest = str.slice(1);

    switch (parseInt(first)) {
        case 0:
            first = 'zero'
            break;
        case 1:
            first = 'one'
            break;
        case 2:
            first = 'two'
            break;
        case 3:
            first = 'three'
            break;
        case 4:
            first = 'four'
            break;
        case 5:
            first = 'five'
            break;
        case 6:
            first = 'six'
            break;
        case 7:
            first = 'seven'
            break;
        case 8:
            first = 'eight'
            break;
        case 9:
            first = 'nine'
            break;
        default:
            break;
    }

    return first + numToText(rest);
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function (tag, node = document.querySelector('body')) {
    let count = 0;

    if (node.localName === tag) {
        count += 1;
    }

    const { children } = node;

    for (let i = 0; i < children.length; i++) {
        count += tagCount(tag, children[i]);
    }

    return count;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
// var binarySearch = function (array, target, min, max) {
//     if (min === undefined) {
//         min = 0;
//     }

//     if (max === undefined) {
//         max = array.length - 1;
//     }

//     if (min > max) {
//         return null;
//     }

//     const midpoint = Math.floor((min + max) / 2);
//     const value = array[midpoint];

//     if (target < value) {
//         return binarySearch(array, target, min, midpoint - 1);
//     }

//     if (target > value) {
//         return binarySearch(array, target, midpoint + 1, max);
//     }

//     return midpoint;
// };

var binarySearch = function (array, target) {
    if (array.length === 0) {
        return null;
    }

    const midpoint = Math.floor(array.length / 2);
    const value = array[midpoint];

    if (target < value) {
        return binarySearch(array.slice(0, midpoint), target);
    }

    if (target > value) {
        const result = binarySearch(array.slice(midpoint + 1), target);

        return result === null ? null : midpoint + 1 + result;
    }

    return midpoint;
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function (array) {
    if (array.length < 2) {
        return array;
    }

    const midpoint = array.length / 2;
    const sortedLeft = mergeSort(array.slice(0, midpoint));
    const sortedRight = mergeSort(array.slice(midpoint));
    let leftIndex = 0;
    let rightIndex = 0;
    let leftValue = sortedLeft[leftIndex];
    let rightValue = sortedRight[rightIndex];
    let result = [];

    while (leftValue !== undefined || rightValue !== undefined) {
        if (rightValue === undefined || leftValue <= rightValue) {
            result.push(leftValue);
            leftValue = sortedLeft[++leftIndex];
        } else {
            result.push(rightValue);
            rightValue = sortedRight[++rightIndex];
        }
    }

    return result;
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function (input) {
    if (typeof input !== 'object') {
        return input;
    }

    const output = new input.constructor();

    for (let key in input) {
        const val = input[key];
        output[key] = clone(val);
    }

    return output;
};
