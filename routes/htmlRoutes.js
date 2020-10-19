// Requiring path to so we can use relative routes to our HTML files
const path = require("path");


module.exports = function(app) {
    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
  
    app.get("/stats", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
  
    app.use((req, res, next) => {
      res.status(404).send("Sorry can't find that!");
      next();
    });
  };