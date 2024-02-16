// create a class for student and display data like id,name,batch,divsion,address for 2students student

class Student{
    constructor(id,name,batch,divsion,address){
        this.sid=id
        this.sname=name
        this.sbatch=batch
        this.sdivsion=divsion
        this.saddress=address
    }
    printDetails(){
        console.log(`------------Student Details-------------
        Student id : ${this.sid }
        Student name : ${ this.sname }
        Student batch : ${ this.sbatch }
        Student divsion : ${ this.sdivsion }
        Student address : ${ this.saddress }`);
    }
}

const stud1= new Student(1,"sruthy","a1","A","abc")
const stud2= new Student(2,"divya","a2","B","bnm")
stud1.printDetails()
stud2.printDetails()