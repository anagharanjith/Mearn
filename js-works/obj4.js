//Task 1
//find the first recursive character from the given pattern="ABBCCBAD"     // recursive- repeative alphabet
//ans: A
pattern="ABBCCBAD"
output = {}
for(let char of pattern){
    if(char in output){
        console.log(`first recursive character : ${char}`);
        break
    }else{
        output[char] = 1
    }
}




//Task 2

//display number count
numArray = [10,20,30,40,20,30,50,30,20,10,60,70,40,50,60,70,80,20]
//output = {10:2,20:4,30:3,40:2,50:2,60:2,70:2,80:1}
console.log("--------------------task-2----------------------------");
output = {}
numArray.forEach(num=>output.hasOwnProperty(num)?output[num]++:output[num]=1)
console.log(output);