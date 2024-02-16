// 3. to print all vowels from given string, input="hello hai" , output:e,o,a,i

// algorithm
// 1. create an array with vowels
// 2. split input to array of characters
// 3. fetch each character from input array and check it icludes vowels

input="hello hai"
vowels=['a','e','i','o','u']  
output=input.split('').filter(char=>vowels.includes(char))
console.log(output);     

// 4. to display the word count of the given paragraph

// Display the word count of the given paragraph:

// para="Balloons are pretty and come in different colors, different shapes, different sizes, and they can even adjust
//  sizes as needed. But dont make them too big or they might just pop and then bye-bye balloon. Itll be gone and
//   lost for the rest of mankind. They can serve a variety of purposes from decorating to water balloon wars. You 
//   just have to use your head to think a little bit about what to do with them. "

// console.log(`total character count of str: ${para.length}`);

// 

