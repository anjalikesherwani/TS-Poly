var Rectangle = /** @class */ (function () {
    function Rectangle(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
    Rectangle.prototype.area = function () {
        return this.length * this.breadth;
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
// let sh:Shape =new Circle(10);
// sh.area(); //Circle Area method called
// console.log("Area of circle is "+sh.area());
var sha = [new Circle(10), new Rectangle(5, 6)];
sha.forEach(function (s) { return console.log(s.area() + "\n"); });
// for (let s of sha) {
//    console.log("Area of shape is "+s.area())
// }
// //Type Guard using instanceOf operator
// function getArea(shape:Shape):number{
//     if(shape instanceof Circle){
//        let c=shape as Circle;
//        return c.area();
//     }else if(shape instanceof Rectangle){
//          let r=shape as Rectangle;
//          return r.area();
//     }
//     throw new Error("Unexpected shape type");
// }
// let shapes:Shape= new Rectangle(3,4);
// shapes.area();
// console.log("Total Area : "+ shapes.area());
