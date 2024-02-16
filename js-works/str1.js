// length of the string
str="Company Name"      // string is case sensitive
console.log(`total character count of str: ${str.length}`);

// first 3 will display 4 th index not incluuded  give th first index as satrt =0
// substring: it is the parts of a word like Company Name : part is co,comp,c,... are parts
substring=str.substring(0,4)
console.log(`substring of str:${substring}`);

// check the string starts with 'C' or not
console.log(`check str starts with 'C': ${str.startsWith('Com')}`);

// check the string ends with 'me' or not
console.log(`check str ends with me: ${str.endsWith('me')}`);

// remove last 5-1=4 characters from the string , remove last characters as giving -5 , if want to remove first characters give as 5
console.log(`After applying slice: ${str.slice(0,-5)}`);

// split string into two words and results in the form of array
console.log(str.split(' '));

// split string into two words and results in the form of array and gives each characters as one by one
console.log(str.split(''));

// newstring as "    monday     "
newStr="    monday    "

// new length of the character from "newStr"
console.log(`total character count of str: ${newStr.length}`);

// remove unwanted space from the string
console.log(`total character count of str: ${newStr.trim().length}`);

// change string to small letters
console.log(`str in small letter: ${str.toLowerCase()}`);

// change string to capital letters
console.log(`str in small letter: ${str.toUpperCase()}`);

