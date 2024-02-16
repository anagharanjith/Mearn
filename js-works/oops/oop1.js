class Employee{
    // property

    // function
    // constructor - default fuction/ methodes-inside function/ for initalising class variable /property
    constructor(id,ename,desg,salary){
      this.empId = id
      this.empName = ename
      this.empDesg = desg
      this.empSalary = salary
     
    }
    printDetails(){
        console.log(`------------Employee Details-------------
        Employee id : ${this.empId }
        Employee ename : ${ this.empName }
        Employee desg : ${ this.empDesg }
        Employee salary : ${ this.empSalary }`);
    }
}
const emp1 = new Employee(1000,"neel patel","DevOp",56000)
const emp2 = new Employee(1001,"laisha agarwal","'testing'",46000)

emp1.printDetails()
emp2.printDetails()