

// Write a function that take a string as input and reverse only the vowels of a string
// Example 1: s= "hello" , return "holle"
// Example 2: s= "leetcode" , return "leotcede"              

function reversVow(s) {
   const vowel = char => ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(char);
  const chr = s.split('');
    let left = 0;
    let right = chr.length - 1;
   while (left < right) {
      while (left < right && !vowel(chr[left])) {
        left++;
      }
 while (left < right && !vowel(chr[right])) {
        right--;
      }
      if (left < right) {
        const temp = chr[left];
        chr[left] = chr[right];
        chr[right] = temp;
  
        left++;
        right--;
      }
    }                     
   const result = chr.join('');
  return result;
  }
  const exmp1 = "hello";
  console.log(reversVow(exmp1));
  
  const exmp2 = "leetcode";
  console.log(reversVow(exmp2)); 
  