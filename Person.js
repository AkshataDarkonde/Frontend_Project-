//Interface
var Employee = /** @class */ (function () {
    function Employee(Salary) {
        var _this = this;
        this.getPerson = function (Name, Age) {
            _this.Name = Name;
            _this.Age = Age;
            return "Employee name :   " + Name + ', age :   ' + Age + ' , salary :   ' + _this.Salary;
        };
        this.Salary = Salary;
    }
    return Employee;
}());
var emp1 = new Employee(45000);
console.log(emp1.getPerson("Akshata", 22));
var emp2 = new Employee(45000);
console.log(emp2.getPerson("Shree", 22));
