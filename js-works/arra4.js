// print all numbers <10
numArray = [[10,2],[45,67],[56,3],[8,6]]
for(let subarray of numArray)
{
    for(let num of subarray)
    {
        if(num<10){
            console.log(num);
        }
    }
}