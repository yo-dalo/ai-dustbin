const motors = require("../configs/moter");
const servoMoter = require("../configs/servoMoter");

class Action {

  static async stopAll() {
    Object.values(motors).forEach(m => {
      m.pin1.writeSync(0);
      m.pin2.writeSync(0);
    });
    console.log("All motors stopped");
  }

  static async forward(id) {
    await this.stopAll();
    motors.m1.pin1.writeSync(1); motors.m2.pin1.writeSync(1);
    motors.m3.pin1.writeSync(1); motors.m4.pin1.writeSync(1);
    console.log("Forward");
  }

  static async backward(id) {
    await this.stopAll();
    motors.m1.pin2.writeSync(1); motors.m2.pin2.writeSync(1);
    motors.m3.pin2.writeSync(1); motors.m4.pin2.writeSync(1);
    console.log("Backward");
  }

  static async left(id) {
    await this.stopAll();
    motors.m1.pin2.writeSync(1); motors.m2.pin2.writeSync(1);
    motors.m3.pin1.writeSync(1); motors.m4.pin1.writeSync(1);
    console.log("Left");
  }

  static async right(id) {
    await this.stopAll();
    motors.m1.pin1.writeSync(1); motors.m2.pin1.writeSync(1);
    motors.m3.pin2.writeSync(1); motors.m4.pin2.writeSync(1);
    console.log("Right");
  }

  static async servoAngel(angel) {
    await this.stopAll();
    if (servoMoter.s1.servoWrite) {
      await servoMoter.s1.servoWrite(angel);
    } else {
      console.log(`(Sim) Servo rotate to ${angel}`);
    }
    console.log("Servo rotate", angel);
  }
}

// Optional cleanup on exit
// process.on("SIGINT", async () => {
//   await Action.stopAll();
//   Object.values(motors).forEach(m => m.unexport());
//   process.exit();
// });

module.exports = Action;
