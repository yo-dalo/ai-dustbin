const express = require("express");
const cors = require("cors");
const app = express();

const  remote_control= require("./routs/remote_control");



// Middleware
app.use(cors());
app.use(express.json());


 app.use("/api", remote_control);
 


// Routes
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Port
const PORT = 5000;
const HOSH = 5000;
app.listen(PORT, HOST,() => {
  console.log(`Server started on port ${PORT}`);
});
