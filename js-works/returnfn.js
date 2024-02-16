// function add(num1,num2){
//     sum=num1+num2
//     return sum
// }
//  to store the values we can return function call as

// var out= add(34,67)
// console.log(out);

// var out= add(35,67)
// console.log(out);


//    or -->          console.log(add(20,30));


// function displayi(){                 here return does not give a continous itrative output
//     for(i=1;i<=5;i++){
//         return i
//     }
// }
// console.log(displayi());



// find greatest number

// function greatest(num1,num2){
//     if(num1>num2){
//         return num1
//     }
// else if(n2>n1){
//         return num2
// }

//     else {
//         return equal
//     }
// }

// console.log(greatest(10,30));

// or

// function greatest(n1,n2){
//      return n1>n2? "n1 is greater" : n2>n1?"n2 is greater":"equal"
// }
// console.log(greatest(12,12));



//factorial     5!=5*4*3*2*1

// function factorial(n){
//        var fact=1
//     for(;n>1;n--){
//        fact*=n 
//     }
//     return fact
// }
// console.log(factorial(5));


// positive or negative
 
// function posneg(num){
//     return num>0?"num is positive":num<0?"num is negative":"zero"
// }

// console.log(posneg(0));
// console.log(posneg(9));
// console.log(posneg(-90));



// check prime or not

// function prime(n){
//     for(i=2;i<n;i++)
//     {
//         if(n%i==0){
//             return "not prime" 
//         }
//     }
//     return "prime"
// }
// console.log(prime(3));
// console.log(prime(8));