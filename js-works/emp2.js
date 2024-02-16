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

// find total salary of all employees

sum= employee.map((emp)=>emp[4]).reduce((sal1,sal2)=>sal1+sal2)
console.log(`total salary= ${sum}`);

// find employee with highest salary

highest = employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1:emp2)
console.log(highest);

// find employee with lowest salary


lowest = employee.reduce((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2)
console.log(lowest);


lowestFirst = employee.reduceRight((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2)
console.log(lowestFirst);