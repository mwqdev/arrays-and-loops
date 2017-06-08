// 1.
// Without logging the values, list the value of `sports` and `total`
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
// A:
// The value of sports remains unchanged until after the definition of the variable `total` on line 4
sports = ['soccer', 'baseball'];
// The `total` variable above is defined as the `string` variable, with two strings added to the end via the `push()` method
total = ['soccer', 'baseball', 'football', 'swimming'];
// The value of `sports` after line 4
sports = ['soccer', 'baseball', 'football', 'swimming'];

// 2.
// Using the `strings` array, wrte a function `longestString()`
// that accepts an array argument and returns the longest string in the array
var strings = ['this','is','a','collection','of','words'];
// A:
var longestString = function(strings) {           // Create function with parameter `strings`
    var longest = strings.sort(function(a, b) {   // Create variable named `longest` and invoke the `sort()` method
    return b.length - a.length;                   // Using the parameters, change the order to compare the lengths of each string in the array
  });
    return longest[0];                            // Return the value stored in the 0 index, which is now the longest string
}

console.assert(longestString(strings) === 'collection', {"message": "longestString should return 'collection'"});


// Use the `numbers` array for questions 3 - 8.
var numbers = [1,12,4,18,9,7,11,3,101,5,6];

// 3.
// Write a function `smallestNumber()` that accepts an array
// and returns the smallest number in the array.
// A:
var smallestNumber = function(numbers) {
  var smallest = numbers.sort(function(a, b) {    // The reverse of above
    return a.length - b.length;
  });
  return numbers[0];
}

console.assert(smallestNumber(numbers) === 1, {"message": "smallestNumber should return 1"});

var numbers = [1,12,4,18,9,7,11,3,101,5,6]; // The order of my numbers array is altered above, so it must be declared again below in order to pass a later assertion

// 4.
// Write a function `getEvens()` that accepts an array
// and returns only the even numbers in the array.
// A:
var getEvens = function(numbers) {

  var evenFilter = function (num) {
  return num % 2 === 0;                         // This function determines if the number passed in can be divided by two using the remainder operator
  };

  var evenArray = numbers.filter(evenFilter);   // The array filter method, using the function above on each number
  return evenArray; // The array returned by this function in a different order than the one in the assertion below
}

console.assert(getEvens(numbers).toString() === '12,4,18,6', {'message': 'getEvens should return "12,4,18,6"'});

// 5.
// Write a function that accepts an array argument
// and returns the array reversed
// Hint: When looping over the array, start at the last index
// and decrement the iterator to zero
// A:
var arrayReverser = function(numbers) {
  var reversedNumbers = [];
  for (var i = numbers.length - 1; i >= 0; i--) {
    reversedNumbers.push(numbers[i]);
  }
  return reversedNumbers;
}

console.assert(arrayReverser(numbers).toString() === '6,5,101,3,11,7,9,18,4,12,1', {'message': 'arrayReverser should return "6,5,101,3,11,7,9,18,4,12,1"'});

// 6.
// Write a function that accepts an array argument
// and returns the sum of all of the numbers in the array
// A:
var sumArrayOfNumbers = function(numbers) {
  var x = 0; // Declare a new number of 0 to add to
  for (var i = 0; i < numbers.length; i++) {
    x += numbers[i]; // Add number's sum to the variable
  }
  return x;
}

console.assert(sumArrayOfNumbers(numbers) === 177, {'message': 'sumArrayOfNumbers should return 177'});

// 7.
// Write a function that accepts an array argument
// and returns an array of only the numbers greater than 10
// A:

var numbersOver10 = function(numbers) {
    var arrayOfTen = [];
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] > 10) {
        arrayOfTen.push(numbers[i]);
      }
    }
    return arrayOfTen;
}

console.assert(numbersOver10(numbers).toString() === "12,18,11,101", {'message': 'numbersOver10 should return "12,18,11,101"'});

// 8.
// Write a function that accepts both an array and number argument
// and returns an array of only the numbers greater than the number passed to the function
// A:

var numbersOverX = function(numbers, x) {
  var newArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > x) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
}

console.assert(numbersOverX(numbers, 15).toString() === "18,101", {'message': 'numbersOverX should return "18,101"'});

// 9.
// Write a function `joinArrays()` that takes an array o                             //                             //                             //f arrays,
// and returns a single array with the contents of the second array
// listed after the contents of the first array
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var numbersTwo = [33,56,72,2,5,66,90,21,42];
// A:

var joinArrays = function([numbers, numbersTwo]) {
  return numbers.concat(numbersTwo);
}

console.assert(joinArrays([numbers, numbersTwo]).toString() === '1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42', {'message': 'joinArrays should return "1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42"'});


// 10.
// Using the `instructors` array, comment the value of each variable below
var instructors = [
    ['JD','JavaScript'],
    ['Tim','JavaScript'],
    ['Brit','Ruby'],
    ['Joe','iOS'],
    ['Dan','JavaScript'],
    ['Will','JavaScript'],
    ['Calvin','JavaScript'],
    ['James','Ruby']
];

var instructorNameDiscipline = instructors[5];
// greenvIlleInstructor = ['Will','JavaScript']

var instructorOne = instructors[4][0];
// instructorOne = 'Dan'

var instructorTwo = instructors[0][1];
// instructorTwo = 'JavaScript'

var instructorThree = instructors[2][0];
// instructorThree = 'Brit'
