var Event = require('events')
var util = require('util')

function BusEvent(busNumber){
  Event.call(this)
  this.busNumber = busNumber
}

util.inherits(BusEvent, Event)
BusEvent.prototype.arrived = function(time){
    this.emit('arrived', time)
}

var bus41 = new BusEvent("41")
bus41.on('arrived', function(time) {
    console.log("Hello commuters, Bus 41 arrives at " + time)
})

bus41.arrived('6PM')
