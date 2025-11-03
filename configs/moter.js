let Gpio;

try {
  // Raspberry Pi environment me real GPIO
  Gpio = require('onoff').Gpio;
  // Test real GPIO by checking if pins exist
  new Gpio(4, 'out').unexport();
  console.log('Running with real GPIO (Raspberry Pi)');
} catch (e) {
  // Local machine ya incompatible Node version me Fake GPIO
  class FakeGpio {
    constructor(pin, dir) {
      this.pin = pin;
      this.dir = dir;
      console.log(`(Sim) GPIO ${pin} initialized as ${dir}`);
    }
    writeSync(val) {
      console.log(`(Sim) GPIO ${this.pin} -> ${val}`);
    }
    unexport() {
      console.log(`(Sim) GPIO ${this.pin} released`);
    }
  }
  Gpio = FakeGpio;
  console.log('Running in simulation mode (no real GPIO)');
}

const motors = {
  m1: { pin1: new Gpio(18, "out"), pin2: new Gpio(17, "out") },
  m2: { pin1: new Gpio(22, "out"), pin2: new Gpio(23, "out") },
  m3: { pin1: new Gpio(24, "out"), pin2: new Gpio(25, "out") },
  m4: { pin1: new Gpio(5, "out"), pin2: new Gpio(6, "out") },
};

module.exports = motors;
