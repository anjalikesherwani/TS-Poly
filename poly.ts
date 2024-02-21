interface Shape{
    area():number;

}

class Rectangle implements Shape{
    constructor(private  length: number, private breadth: number){}

    public area():number{
        return this.length * this.breadth;
    }

}


class Circle implements Shape{
    constructor(private radius: number) {}
    
    public area(): number {
      return Math.PI*this.radius*this.radius;
    }
}

// let sh:Shape =new Circle(10);
// sh.area(); //Circle Area method called
// console.log("Area of circle is "+sh.area());

let sha:Shape[] =[new Circle(10),new Rectangle(5,6)];
sha.forEach((s)=>console.log(s.area( )+"\n"));



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