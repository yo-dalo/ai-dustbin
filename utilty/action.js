const motors = require("../configs/moter");

const servoMoter = require("../configs/servoMoter");



class Action {

  static async stopAll() {
    Object.values(motors).forEach(m =>{
        m.pin1.writeSync(0)
        m.pin2.writeSync(0)
    });
  }



  static async forward(id) {
    this.stopAll();
    motors.m1.pin1.writeSync(1); motors.m2.pin1.writeSync(1);
    motors.m3.pin1.writeSync(1); motors.m4.pin1.writeSync(1);
    console.log("Forward");
  }


  static async backward(id) {
    this.stopAll();
    motors.m1.pin2.writeSync(1); motors.m2.pin2.writeSync(1);
    motors.m3.pin2.writeSync(1); motors.m4.pin2.writeSync(1);
    console.log("Backward");
  }


  static async left(id) {
    this.stopAll();
    motors.m1.pin2.writeSync(1); motors.m2.pin2.writeSync(1);
    motors.m3.pin1.writeSync(1); motors.m4.pin1.writeSync(1);
    console.log("Left");
  }



  static async right(id) {
      this.stopAll();
    motors.m1.pin1.writeSync(1); motors.m2.pin1.writeSync(1);
    motors.m3.pin2.writeSync(1); motors.m4.pin2.writeSync(1);
    console.log("Right");
  }


 

static async servoAngel(angel) {
      this.stopAll();
    await servoMoter.s1.servoWrite(angel)
    console.log("servo rotate ",angel);
  }
}


// process.on("SIGINT", () => {
//   stopAll();
//   Object.values(motors).forEach(m => m.unexport());
//   process.exit();
// });














module.exports = Action; 