const employe = {
    empId:1000,empName:'Neel',empDes:'developer',empLoc:'Kochi',empSal:25000,empExp:3
}

console.log(employe);
console.log(`employee name: ${employe['empName']}`);
console.log(`employe salary: ${employe.empDes}`);

// to check weather a key is present or not    use 'in'

"empSal" in employe&&console.log(`employee salary : ${employe.empSal}`);

// check wether empoyevaccinated is present if present display it otherwise insert the new value empoyevaccinated

"isVaccinated" in employe ? console.log(`employe vaccinated status: ${employe.isVaccinated}`):employe.
isVaccinated=true;
console.log(employe);

// to change a value existed in the object

employe.empSal+=5000
console.log(employe);
console.log("-------employe  details--------");

// print or fetch all values each one by one
for(let key in employe){
    console.log(`${key}: ${employe[key]}`);
}
