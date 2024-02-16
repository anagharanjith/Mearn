
nameArray = ["Maya","Mohit","Manuel","Mahin","Mihir"]
console.log(nameArray);

// is mohit present in the given array

console.log("using some method");
console.log(`is mohit present in the given array :${nameArray.some(name=>name=="Mohit")}`);

console.log("using include methode");
console.log(`is mohit present in the given array : ${nameArray.includes("Mohit")}`);

// if "mohit" is in array then display its index

index=nameArray.indexOf("Mohit")
if(nameArray.includes("Mohit")){
    console.log(`index of "mohit" : ${index}`);
}
else{
    console.log("nothing to print");
}
// remove mohit from given array

console.log(nameArray.splice(index,1));
console.log(`after removal of "mohit"`);
console.log(nameArray);

// replace mohit from given array

console.log(nameArray.splice(index,1,"Milliand"));
console.log(`array after replacing  "mohit" as "Milliand" `);
console.log(nameArray);

// display a new array without "Mahin"  // use filter() method

newArray= nameArray.filter(name=>name!="Mahin")
console.log(`display a new array without "Mahin"`);
console.log(newArray);