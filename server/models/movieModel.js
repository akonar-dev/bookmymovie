const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    description: {
      type: String,
      trim: true,
      minlength: 2,
    },
    genre:{
        type: String,
        required: true
    },
    rating: {
      type: Number,
    },
    runningTime: {
      type: Number,
      required: true,
    },
    posterPath:{
        type: String,
        required: true,
    }
  },
  {
    timestamps: true,
  }
);
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie