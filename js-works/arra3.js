// sorting

// check number 40 is present in the given array

numArray = [10,20,30,40,357,67,89,28]
// console.log(numArray );
numArray.sort((a,b)=>a-b)        // first step: sort the array in ascending order  
// console.log(numArray );
low=0
up=numArray.length-1
search=40
ispresent=false 
count=0
while(low<=up){
    count++
    mid= Math.floor((low+up)/2)
    if(search==numArray[mid]){
        ispresent=true
        break
    }
    else if(search>numArray[mid]){
        low=mid+1
    }
    else{
        up=mid-1
    }
}
console.log("execution time",count);
console.log(ispresent?"number found":"number not found");