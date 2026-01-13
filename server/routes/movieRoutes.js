const express = require("express");
const movieRouter = express.Router();
const {addMovie,getAllMovies, getMovieById, deletedMovieById, updatedMovieById} = require("../controllers/movieController")


movieRouter.post("/add",addMovie );

movieRouter.put("/update/:id", updatedMovieById );

movieRouter.delete("/delete/:id", deletedMovieById);

movieRouter.get("/all", getAllMovies);

movieRouter.get("/:id", getMovieById);

module.exports = movieRouter