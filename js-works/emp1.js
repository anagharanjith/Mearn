//[ id,name,designation,location,salary,experience]
employee = [
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',15000,2],
    [1002,'Maxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

//1. print all employee name

console.log("------employee name-----");

// for(let emp of employee){
//     console.log(emp[1]);
// }

// better to use for of to           // for each()

employee.forEach(emp => console.log(emp[1]));

//2.print total number of employee

console.log("------ totalnumber of employees------:",employee.length);

//3. print developer employee details  // use filter

console.log("--------developer employee details:-------");
// for(let emp of employee){
//     if(emp[2]==='developer'){
//         console.log(emp[1]);
//     }
// }

employee.filter(emp=>emp[4]==='developer').forEach(emp=>console.log(emp[1]))


//4. print employee whose salary > 30000  // use filter

console.log("---------employee whose salary > 30000---------");
// for(let emp of employee){
//     if(emp[4]>30000){
//         console.log(emp[1]);
//     }
// }

//   better to use filter method here
 
employee.filter(emp=>emp[4]>30000).forEach(emp=>console.log(emp[1]))

//5. print details of employee Laisha

console.log("------details of employee Laisha-----");
emp=employee.find(emp=>emp[1]==='Laisha')
{
            console.log(`Employee Name: ${emp[1]}
            console.log(Employee Designation: ${emp[2]}
            console.log(Employee Location: ${emp[3]}
            console.log(Employee Salary: ${emp[4]}
            console.log(Employee Experience: ${emp[5]}
            `);
        }
// for(let emp of employee){
//     if(emp[1]==='Laisha'){
//         console.log(`Employee Name: ${emp[1]}
//         console.log(Employee Designation: ${emp[2]}
//         console.log(Employee Location: ${emp[3]}
//         console.log(Employee Salary: ${emp[4]}
//         console.log(Employee Experience: ${emp[5]}
//         `);
//     }
// }


//6. Sort employee based on their salary in descending order

console.log("----------Sort employee based on their salary in descending order--------");
employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(employee);

//7. Sort employee based on their experience in ascending order

console.log("----------Sort employee based on their experience in ascending order--------");
employee.sort((emp1,emp2)=>emp1[5]-emp2[5])
console.log(employee);