var express = require("express");

var router = express.Router();


var post = require("../models/post.js");


router.get("/", function(req, res) {
  post.all(function(data) {
    var hbsObject = {
      posts: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/posts", function(req, res) {
  post.create([
    "name", "native"
  ], [
    req.body.name, req.body.native
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/posts/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  post.update({
    native: req.body.native
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/posts/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  post.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;
