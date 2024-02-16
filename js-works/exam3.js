// Given two strings, s and t, write a function to determine if t is an anagram of s

// Example: s= "dear", t="read", return true. 

// s="rat" , t="cat" return false             



function Anagram(s, t) {
    const sortString = str => str.split('').sort().join('');
  

    return sortString(s) === sortString(t);
  }
  
//   const eg1_s = "dear";
//   const eg1_t = "read";
//   console.log(Anagram(eg1_s, eg1_t)); 
  
  const eg2_s = "rat";
  const eg2_t = "cat";
  console.log(Anagram(eg2_s, eg2_t)); 
  