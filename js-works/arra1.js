months=["jan","feb","march","april",5]
console.log("months",months);
console.log("tyoe of array:", typeof months);
console.log("total items in months:",months.length);
console.log("first item in months:",months[0]);
console.log("last item in months:",months[months.length-1]);

// for loop
// console.log("displaying array items one by one using for loop");
// for(index=0;index<months.length;index++){
//    console.log(months[index]);
// }

//or
// use    'for of '   methode to acess each data one by oe 

console.log("displaying array items one by one using for loop");
for(let month of months){
  console.log(month);
}

//another methode to acees the each data is    'for in ' 


console.log("displaying array items one by one using for loop");
for(let index in months){
  console.log (months [index]);
}


// "push" is used to add datas to array

months.push("may")   // inserted at last of the array
console.log("months",months);


// unshift is used to insert a data at first index

months.push("may")
months.unshift("december")
console.log("months",months);


//  "pop" is used to delete an array data at last data remove at end

months.pop()
console.log("months",months);

// "shift" is used to remove first data from the array

months.shift()
console.log("months",months);


