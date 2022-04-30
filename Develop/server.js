const express = require("express");

// Create required routes for api/html
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Init app and create port
const app = express();
const PORT = process.env.PORT || 3001;

//set up body parsing, static & route to middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// extend express running thru here first
require("./routes/apiRoutes")(app);
app.use(htmlRoutes);

// Start server on port
app.listen(PORT, () => console.log(`This port is listening at ${PORT} 🚀`));
