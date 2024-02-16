// for(var i=1;i<=5;i++)
// {
  
//     if(i==3){
//         continue
//     }
//     console.log(i);
// }
// console.log("out",i);


//  check prime numbers

// var num=8
// var flag=0

// for(var i=2;i<num;i++){
//     if(num%i==0){
//         flag=1
//         break
//     }
// }
// if(flag==1){
//     console.log("not prime number");
// }
// else{
//     console.log("prime number");
// }


// better methode for above program


// var num=6
// for(var i=2;i<=num;i++){
//     if(num%i==0){
//         break
//     }
// }
// if(i==num){
//     console.log("prime number");
// }
// else{
//     console.log("not prime");
// }


// print  all prime numbers from r1 to r2

// var r1=5
// var r2=15
// for(;r1<=r2;r1++){
//     for(i=2;i<r1;i++)
//     {
//         if(r1%i==0){
//             break
//         }
//     }
//     if(r1==i){
//         console.log(r1);
//     }
// }


// write sum of prime numbers from range1 to range2

// var r1=5
// var r2=15
// var sum=0
// for(;r1<=r2;r1++){
//     for(j=2;j<r2;j++){
//         if(r1%j==0){
//             break
//         }
//     }
//     if(r1==j){
//         sum=sum+r1
//     }
// }
// console.log(sum);

//fabinocci series 0,1,1,2,,3,5...  print next 10 terms

// var n1=0
// var n2=1
// var nterms=15
// for(let i=1;i<=nterms;i++){
//     console.log(n1);
//     n3=n1+n2
//     n1=n2
//     n2=n3
// }


// square of non prime numbers from r1 to r2


// var r1=5
// var r2=10
//  for(;r1<=r2;r1++){
//     for(i=2;i<r1;i++){
//         if(r1%i==0){
//             break
//         }
//     }
//     if(r1!=i){
//         console.log(r1**2);
//     }
//  }

//or

//  var r1=5
// var r2=10
//  for(;r1<=r2;r1++){
//     for(i=2;i<r1;i++){
//         if(r1%i==0){
//             console.log(r1**2);
//             break
//         }
//     }
// }