numArray = [10,11,12,13,14,15]

// find the total sum of all numbers in the given array

// sum = numArray.reduce((n1,n2)=>n1+n2)
// console.log(`total sum=${sum}`);

// find largest number
// large = numArray.reduce((n1,n2)=>n1>n2?n1:n2)
// console.log(`largest=${large}`);

// find the smallest number

// small = numArray.reduce((n1,n2)=>n1<n2?n1:n2)
// console.log(`smallest=${small}`);

// find even numbers

// for(let num of numArray){
//     if(num%2==0){
//         console.log(num);
//     }
// }

// better way is below  // filter can use where only  having "if" condition ie checking  if it has else part filter cannot applay

// evenNum=numArray.filter(num=>num%2==0)
// console.log(evenNum);

// find all numbers <13
// result=numArray.filter(num=>num<13)
// console.log(result);



// print squares of each number in the given array

// square=numArray.forfilter(num=>mum**2)
// console.log(square);

// use mapping

// squareArray= numArray.map(num=>num**2)
// console.log(squareArray);


// display an array with cube of all number in the given array

// result=numArray.map(num=>num**3)
// console.log(result);


// create a new array with numbers, from existing array while satisfiying given condition
// if number<13, then increment number


// result=numArray.map(num=>num<13?num+1:num-1)
// console.log(result);

// if number>=13 then decrement the number
// ans: 11,12,13,12,13,14


