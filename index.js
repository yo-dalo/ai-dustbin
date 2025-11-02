const express = require9


// Routes
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Port
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
