var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Welcome ".concat(this.name));
    };
    return Person;
}());
obj = new Person("Ranjeet Tiwari", 22);
obj.greet();
