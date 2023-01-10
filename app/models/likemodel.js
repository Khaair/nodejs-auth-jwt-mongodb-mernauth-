const mongoose = require("mongoose");
const { Schema } = mongoose;

const likeSchema = new Schema({
  status: {
    type: String,
    required: true,
  },

  userId: {
    type: String,
    required: true,
  },

  postId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("likemodel", likeSchema);
