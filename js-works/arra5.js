numArray =[[10,2],[45,67],[56,3],[8,6]]
flattenedArray= numArray.flat(Infinity)
// 1.  print all numbers <10  - filter()

// console.log(numArray.flat(1));
console.log("print all numbers <10 ");
console.log(numArray.flat(Infinity).filter(num=>num<10));


// 2.  print squares of each numbers in the array - map()

console.log("------ squares of each numbers in the arra-----");
console.log(flattenedArray.map(num=>num**2));

// 3.  print total sum of all numbers in the array -reduce()

console.log(`total sum of all numbers in the array : ${flattenedArray.reduce((n1,n2)=>n1+n2)}`);

