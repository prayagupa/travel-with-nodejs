var Shape = function(shapeType) {
   this.shapeType = shapeType
}

Shape.prototype.getShapeType = function(){
  return this.shapeType
}


var shapeInstance = new Shape("Hexagonal")
console.log("Shape type is " + shapeInstance.getShapeType())


//inheritence

var Triangle = function(a, b, c) {
   Shape.call(this, "Triangle")
   this.a = a
   this.b = b
   this.c = c
}

Triangle.prototype = Object.create(Shape.prototype)
Triangle.prototype.constructor = Triangle

Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c
}

//impl
var triangle = new Triangle(1, 2, 3)
console.log(new triangle.constructor)
console.log(Shape.isPrototypeOf(triangle))

console.log(triangle.getShapeType())
console.log(triangle.getPerimeter())
