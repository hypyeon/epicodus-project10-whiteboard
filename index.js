/*
Question #1: Turning Strings to URLs
URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

Example
Input: "Jasmine Ann Jones"

Output: "Jasmine%20Ann%20Jones"
*/

// Daniya's code: 
const stringReplace = (sentence, sign) => {
  let newSentence = sentence.split(" ");

  for(let i = 1; i < newSentence.length; i+=2){
    newSentence.splice(i, 0, sign)
  }

  let newSentencewithSign = newSentence.join("");
  return newSentencewithSign
}
console.log(stringReplace("Jasmine Ann Jones", "%20"));

// Hayeong's code: 
function URLify(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    str.charAt(i) === " " ? result += "%20" : result += str.charAt(i);
  }
  return result; 
}
console.log(URLify("Jasmine Ann Jones"));
// Recursive 
function URLifyRecursive(str, index = 0, result = '') {
  if (index === str.length) {
    return result; 
  }
  if (str.charAt(index) === " ") {
    result += "%20";
  } else {
    result += str.charAt(index);
  }
  return URLifyRecursive(str, index += 1, result); 
}
console.log(URLifyRecursive("Jasmine Ann Jones"));

/*
Question #2: Array Deduping
Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

Example
Input: [7, 9, "hi", 12, "hi", 7, 53]

Output: [7, 9, "hi", 12, 53]
*/

// Hayeong's codes: 
function deduping(arr) {
  let resultObj = new Set(); 
  for (let element of arr) {
    resultObj.add(element);
  }
  let resultArr = [];
  resultObj.forEach(item => {
    resultArr.push(item);
  });

  return resultArr; 
}
console.log(deduping([7, 9, "hi", 12, "hi", 7, 53]));
// Recursion: 
function dedupingRecursive(arr, index = 0, result = []) {
  if (index === arr.length) {
    return result;
  }
  if (!result.includes(arr[index])) {
    result.push(arr[index]);
  }
  return dedupingRecursive(arr, index += 1, result); 
}
console.log(dedupingRecursive([7, 9, "hi", 12, "hi", 7, 53]));

// Daniya's code: 
function removeDupes(input){
  let newOutput = [];
  input.forEach(element => {
    if(!newOutput.includes(element)){
      newOutput.push(element)
    }
  });
  return newOutput;
}
console.log(removeDupes([7, 9, "hi", 12, "hi", 7, 53]));

/*
Question #3: Compressing Strings
Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

Example
Input: "aaabccdddda"

Output: "3ab2c4da"
*/

// Daniya's code: 
function compressingString(str){
  let newCompress= [];
  let count = 1;

  const newInput= str.split('');
  newInput.forEach((char, index) =>{
    if(char === newInput[index + 1]){
      count++;
    }else{
      newCompress.push(count  + char);
      count = 1;
    }
  })
  const compressesOne = newCompress.join("");
  return compressesOne;
}
console.log(compressingString("aaabccdddda"));

// Hayeong's codes: 
function strCompressor(str) {
  let compressed = '';
  let count = 1; 

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === str[i + 1]) {
      count ++;
    } else {
      compressed += (count > 1 ? count : '') + str[i];
      count = 1;
    }
  }
  return compressed;
}
console.log(strCompressor("aaabccdddda"));
// Recursion: 
function strCompressorRecursive(str, index = 0, compressed = '', count = 1) {
  if (index === str.length) {
    return compressed;
  }
  if (str[index] === str[index + 1]) {
    count ++;
  } else {
    compressed += (count > 1 ? count : '') + str[index];
    count = 1; 
  }
  return strCompressorRecursive(str, index += 1, compressed, count); 
}
console.log(strCompressorRecursive("aaabccdddda"));

/*
Question #4: Checking for Uniqueness
Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

Example
Input: "hello"

Output: false

Input: "copyright"

Output: true
*/

// Hayeong's code: 
function checkUniqueness(str) {
  for (let i = 0; i < str.length; i++) {
    /*
    for (let j = i + 1; j < str.length; j++) {
      if (str.charAt(i) === str.charAt(j)) {
        return false; // not unique 
      } 
    }
    */
    if (str.charAt(i) === str.charAt(i + 1)) {
      return false; 
    }
  }
  return true; 
}
console.log(checkUniqueness("hello"));
console.log(checkUniqueness("copyright"));

// Daniya's code: 
function uniqueWord(word){
  let letters = {};
  for(let i = 0; i < word.length; i++){
    let char = word[i];
    
    if(letters[char]){
      return false
    }
    letters[char] = true
  }
  return true
}
console.log(uniqueWord("hello"));
console.log(uniqueWord("bye"));

/*
Question #5: Array Sorting
Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms — take the time to read about the following:

Quick sort
Merge sort
Heap sort
Insertion sort
Bubble sort
Selection sort
You may implement any of the above algorithms (or your own) to solve the problem — as long as it doesn't use sort().

Example
Input: [9, 2, 7, 12]

Output: [2, 7, 9, 12]
*/

// Daniya's code: 
function numSort(nums){
  for(let i =0; i < nums.length; i++){
    for(let j = 0; j < nums.length - 1; j++){
      
    }
  }
}

// Hayeong's code: 
function arraySorting(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(arraySorting([9, 2, 7, 12]));