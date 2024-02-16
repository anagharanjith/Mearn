// check number 40 is present in the given array
numArray = [10,20,30,40,357,67,89,28]
// linear search
search=40
ispresent=false
count=0
for(let num of numArray){
    count++
    if(num==search){
        ispresent=true
        break
    }
    else{
        ispresent=false
    }
}
console.log("execution time",count);
console.log(ispresent?"number found":"number not found");