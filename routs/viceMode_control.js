const express = require("express");
const Action = require("../utilty/action");



const router = express.Router();



router.get("/vice/:action", async (_, res) => {
        
      const whatAction  = _?.params?.action; 

    if(whatAction=="backward"){
        await Action.backward()
         res.send({ status: " backward ho jayega" }); 
    }
        
     else if(whatAction=="forward"){
         await Action.forward() 
         res.send({ status: "forward jayega" }); 

     } 
     else if(whatAction=="right"){

          Action.right()
         res.send({ status: "right run krega" }); 
     } 
     else if(whatAction=="left") {
        await Action.left()

         res.send({ status: "left krega" }); 
     } else{
        res.send({ status: "provide right command " });
     }

  // await  Action.stopAll()
//   res.send({ status: "stopped" });
});



process.on("SIGINT", () => {
  
  Object.values(motors).forEach(m => m.unexport());
  process.exit();
});


module.exports = router; 