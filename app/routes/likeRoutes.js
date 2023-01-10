const express = require("express");
const router = express.Router();
const likeModel = require("../models/likemodel");

router.get("/show-like", async (req, res) => {
  let data = await likeModel.find();
  res.send(data);
});

router.post("/save-like", async (req, res) => {
  console.log(req.body);

  const tt = new likeModel({
    status: req.body.status,
    userId: req.body.userId,
    postId: req.body.postId,
  });

  try {
    const a1 = await tt.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

// Get Single information
router.route("/show-single-comment/:id").get((req, res) => {
  likeModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

router.delete("/delete-comment/:id", async (req, res) => {
  console.log(req.params.id);
  let data = await likeModel.deleteOne({ _id: req.params.id });
  res.send({ msg: "deleted", data: data });
});

router.post("/update/:id", async (req, res) => {
  console.log(req.params.id, req.body);

  try {
    let updatee = await likeModel.findByIdAndUpdate(
      { _id: req.params.id },
      {
        status: req.body.status,
        userId: req.body.userId,
        postId: req.body.postId,
      }
    );

    res.send({ info: "updated", up: updatee });
  } catch (err) {
    res.send({ info: "error ocuured" });
  }
});

module.exports = router;

//update
