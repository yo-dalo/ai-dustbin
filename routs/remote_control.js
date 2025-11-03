const express = require("express");
const Action = require("../utilty/action");

const router = express.Router();

router.get("/m/:action", async (req, res) => {
  const whatAction = req.params.action;

  switch (whatAction) {
    case "backward":
      await Action.backward();
      res.send({ status: "Backward ho jayega" });
      break;

    case "forward":
      await Action.forward();
      res.send({ status: "Forward jayega" });
      break;

    case "right":
      await Action.right();
      res.send({ status: "Right run krega" });
      break;

    case "left":
      await Action.left();
      res.send({ status: "Left krega" });
      break;

    case "open":
      await Action.servoAngel(90);
      res.send({ status: "Open box" });
      break;

    case "close":
      await Action.servoAngel(1500);
      res.send({ status: "Close hoyega" });
      break;

    default:
      res.send({ status: "Provide right command" });
      break;
  }
});

// Optional cleanup on exit
// process.on("SIGINT", async () => {
//   await Action.stopAll();
//   Object.values(require("../configs/moter")).forEach(m => m.unexport());
//   process.exit();
// });

module.exports = router;
