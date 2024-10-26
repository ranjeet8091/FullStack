//Question 1
// class BankAccount{
//     private balance:number;
//     public AccountHolder :string;
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.hieght = height;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.hieght;
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
var rec = new Rectangle(20, 30);
var cir = new Circle(20);
console.log("Area of Rectangle ".concat(rec.area()));
console.log("Area of Circle ".concat(cir.area().toFixed(2)));
