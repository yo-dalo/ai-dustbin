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
      this.alert = opts?.alert || false;
      console.log(`(Sim) GPIO ${pin} initialized as ${this.mode}${this.alert ? ' with alert' : ''}`);
    }
    writeSync(val) {
      console.log(`(Sim) GPIO ${this.pin} -> ${val}`);
    }
    readSync() {
      const val = 0; // simulation me 0 return
      console.log(`(Sim) GPIO ${this.pin} read -> ${val}`);
      return val;
    }
    unexport() {
      console.log(`(Sim) GPIO ${this.pin} released`);
    }
  }
  Gpio = FakeGpio;
  console.log('Running in simulation mode (no real GPIO)');
}

const ultrasonic = {
  us1: {
    pin1: new Gpio(23, { mode: 'out' }),
    pin2: new Gpio(24, { mode: 'in', alert: true })
  }
};

module.exports = ultrasonic;
