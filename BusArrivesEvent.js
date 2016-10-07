'use strict'

var Event = require('events')

class Bus extends Event {

   constructor(busNumber, time){
       super()
       this.busNumber = busNumber
       this.statusTime = time
   }

   onArrives(){
     console.log("Publishing - Bus " + this.busNumber + " arrived at " + this.statusTime)
     this.emit("arrives")
   }
}

//emitted the event
var bus = new Bus("41", "8:34AM")

//add consumer on arrives event

bus.on("arrives", function(){
       console.log("Consuming - Hey guys, bus arrived.")
})


bus.onArrives()

//consume it
