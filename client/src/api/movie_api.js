import axios from "axios";

export const getAllMovies = async (values) => {
  try {
    const response = await axios.get("http://localhost:8001/api/movie/all");
    return response
  } catch (error) {
    console.error(error);
  }
};