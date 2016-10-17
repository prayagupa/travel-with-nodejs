var Vehicle = {
   vehicleType: null,

   getVehicleType : function() {
       return this.vehicleType
   }
}

//inheritence

var Bus = function(a, b, c) {
   this.a = a
   this.b = b
   this.c = c
}

Bus.prototype = Vehicle
Bus.prototype.vehicleType = "Bus"

Bus.prototype.getPerimeter = function() {
  return this.a + this.b + this.c
}

//impl
var bus = new Bus(1, 2, 3)
console.log(bus)
console.log(Vehicle.isPrototypeOf(bus))

console.log(bus.getVehicleType())
console.log(bus.getPerimeter())
