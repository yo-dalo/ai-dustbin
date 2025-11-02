class FakeGpio {
  constructor(pin, dir) { this.pin = pin; this.dir = dir; }
  writeSync(val) { console.log(`(Sim) GPIO ${this.pin} -> ${val}`); }
  unexport() { console.log(`(Sim) GPIO ${this.pin} released`); }
}
const Gpio = FakeGpio;
const motors = {
       m1:{
           pin1: new Gpio(18, "out"),
           pin2: new Gpio(17, "out")
        },
        
       m2:{
           pin1: new Gpio(22, "out"),
           pin2: new Gpio(23, "out")
        },
       m3:{
           pin1: new Gpio(24, "out"),
           pin2: new Gpio(25, "out")
        },
       m4:{
           pin1: new Gpio(5, "out"),
           pin2: new Gpio(6, "out")
        },
};

module.exports = motors;