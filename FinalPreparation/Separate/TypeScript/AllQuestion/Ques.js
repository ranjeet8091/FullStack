//Quest 1)  create a function that can calculate the tax on  income and return only number.
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getAge = function () {
        return this.age;
    };
    return Student;
}());
var st1 = new Student("Ranjeet", 22);
console.log("The name of user is ".concat(st1.getName(), " and the age is ").concat(st1.getAge()));
