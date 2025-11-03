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
    constructor(pin, opts) {
      this.pin = pin;
      this.mode = opts?.mode || 'out';
      console.log(`(Sim) GPIO ${pin} initialized as ${this.mode}`);
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

const server = {
  s1: new Gpio(18, { mode: 'out' })
};

module.exports = server;
