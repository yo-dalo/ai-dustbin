// class FakeGpio {
//   constructor(pin, dir) { this.pin = pin; this.dir = dir; }
//   writeSync(val) { console.log(`(Sim) GPIO ${this.pin} -> ${val}`); }
//   unexport() { console.log(`(Sim) GPIO ${this.pin} released`); }
// }
// const Gpio = FakeGpio;


const Gpio = require('onoff').Gpio;



const ultrasonic = {
      us1:{
        pin1:new Gpio(23,{mode:Gpio.OUTPUT}),
        pin2:new Gpio(24,{mode:Gpio.INPUT,alert:true})
    }
}


module.exports = ultrasonic;







