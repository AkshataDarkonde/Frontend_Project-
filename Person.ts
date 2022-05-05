//Interface

interface Person {
    Name:string; 
    Age: number;
    getPerson :(Name:string, Age:number) => string; //getPerson Method
}             

class Employee implements Person {
    Name: string;
    Age: number;
    Salary:number;
    constructor(Salary:number)   //constructor decleration
    {
        this.Salary = Salary;
    }
    getPerson = (Name: string, Age: number) : string => //from interface
     {
        this.Name = Name;
        this.Age = Age;
        return "Employee name :   " + Name + ', age :   ' + Age + ' , salary:   ' + this.Salary; 
    }

}

let emp1: Person = new Employee(45000);
console.log(emp1.getPerson("Akshata", 22)); 

let emp2: Person= new Employee(45000);
console.log(emp2.getPerson("Shree", 22));