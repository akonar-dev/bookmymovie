const Movie = require("../models/movieModel")

const addMovie = async (req, res) => {
  console.log("inside post", req.body);
  try {
    const newMovie = await Movie.create(req.body);
    console.log(newMovie, "nm");
    if (!newMovie) {
      return res
        .status(400)
        .json({ success: false, message: "Unable to create movie" });
    }
    res
      .status(201)
      .json({ success: true, newMovie, message: "Movie created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    if (!movies) {
      return res
        .status(400)
        .json({ success: false, message: "Unable to fetch all movies" });
    }
    res.status(200).json({
      success: true,
      movies,
      message: "Fetched all movies successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getMovieById = async (req, res) => {
  try {
    const movieId = req.params.id;
    console.log(movieId, "id")
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res
        .status(400)
        .json({ success: false, message: "Unable to fetch required movie" });
    }
    res.status(200).json({
      success: true,
      movie,
      message: "Fetched required movie successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deletedMovieById = async (req, res) => {
  try {
    const movieId = req.params.id;
    const deletedMovie = await Movie.findByIdAndDelete(movieId);
    if (!deletedMovie) {
      return res
        .status(400)
        .json({ success: false, message: "Unable to delete movie" });
    }
    res
      .status(200)
      .json({
        success: true,
        deletedMovie,
        message: "Deleted movie successfully",
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const updatedMovieById = async (req, res) => {
  try {
    const movieId = req.params.id;
    const updatedMovie = await Movie.findByIdAndUpdate(movieId, req.body);
    if (!updatedMovie) {
      return res
        .status(400)
        .json({ success: false, message: "Unable to update movie" });
    }
    res
      .status(200)
      .json({
        success: true,
        updatedMovie,
        message: "Updated movie successfully",
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {addMovie,getAllMovies, getMovieById, deletedMovieById, updatedMovieById}