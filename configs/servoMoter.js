class FakeGpio {
  constructor(pin, dir) { this.pin = pin; this.dir = dir; }
  writeSync(val) { console.log(`(Sim) GPIO ${this.pin} -> ${val}`); }
  unexport() { console.log(`(Sim) GPIO ${this.pin} released`); }
}
const Gpio = FakeGpio;






const server = {
      s1:new Gpio(18,{mode:Gpio.OUTPUT})
}


module.exports = server;







