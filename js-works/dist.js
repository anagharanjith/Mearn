//[ no,district,+ve cases,death rate,curred rate,1st dose vaccine,2nd dose vaccine]
covid_data = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]

]

//1. district having Highest +ve case         //use reduce()

console.log("---------district having Highest +ve case---------");
danger_zone = covid_data.reduce((data1,data2)=>data1[2]>data2[2]?data1:data2)
console.log(`highest +ve case: ${danger_zone[1]}`);

//2. district having Highest 1st dose vaccine  // use reduce()

console.log("---------district having Highest 1st dose vaccine---------");
highdose = covid_data.reduce((data1,data2)=>data1[5]>data2[5]?data1:data2)
console.log(`highest covid first dose vaccine: ${highdose[1]}`);


//3. district having lowest death rate          // use reduce()

console.log("---------district having lowest death rate ---------");
low = covid_data.reduce((data1,data2)=>data1[3]<data2[3]?data1:data2)
console.log(`lowest death rate : ${low[1]}`);

//4. sort data with +ve case in descending order    // sort()


console.log("----------sort data with +ve case in descending order --------");
covid_data.sort((d1,d2)=>d2[2]-d1[2]).forEach(d=>console.log(d[1]))

//5. is district with +ve cases > 15000              // use some()


resultStatus = covid_data.some(district=>district[2]>1500)
console.log(`is district with +ve cases > 15000: ${resultStatus?'yes':'no'}`);

//6. sort data with 1st dose vaccine          // sort()  [ascending order]

console.log("----------sort data with 1st dose vaccine --------");
covid_data.sort((d1,d2)=>d1[5]-d2[5]).forEach(d=>console.log(d[1]))

//7. Print Thrissur details          // find

Thrissur=covid_data.find(d=>d[1]=="Thrissur")
console.log(`
-----district detals---------
Name: ${Thrissur[1]}
no of covid positive cases: ${Thrissur[2]}
no of death rate: ${Thrissur[3]}
no of covid current cases: ${Thrissur[4]}
first dose vaccine count: ${Thrissur[5]}
second dose vaccine count: ${Thrissur[6]}
`);

//8. Print total number of positive cases       // map,reduce

totalPositiveCases= covid_data.map(d=>d[2]).reduce((c1,c2)=>c1+c2)
console.log(`total number of positive cases: ${totalPositiveCases}`);

//9. Print total number of curred cases         // map,reduce

totalPositiveCases= covid_data.map(d=>d[4]).reduce((c1,c2)=>c1+c2)
console.log(`total number of positive cases: ${totalPositiveCases}`);

//10. Print curred cases in Idukki              // find
district= covid_data.find(district=>district[1]=="Idukki")
console.log(`${district[1]} district,cured case count :${district[4]}}`);
 