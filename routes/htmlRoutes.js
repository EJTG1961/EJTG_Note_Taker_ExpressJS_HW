// Require path to router
const path = require("path");
const router = require("express").Router();

// Adding router.get funtioonality to html pages
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Export router
module.exports = router;
