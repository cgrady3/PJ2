var path = require("path");

module.exports = function(app) {
  // Load welcime/sign-in page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Load main market page and pass in signed-in users id
  app.get("/home/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
  // Load main market page and pass in signed-in users id
  app.get("/home/:id/:item", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"));
  });

  // Load users page by passing in their id
  app.get("/user/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/users.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
