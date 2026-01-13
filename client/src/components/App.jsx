import { useEffect, useState } from "react"
import { getUserData } from "../api/auth_api"
import { getAllMovies } from "../api/movie_api.js";
import Navbar from "./Navbar.jsx";
import MovieCard from "./MovieCard.jsx";
function App() {

  const [currentUser, setCurrentUser] = useState("")
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserData();
      console.log(user.data.user.firstname)
      setCurrentUser(user.data.user.firstname);
    };
    fetchUser();
  }, []);

  useEffect(()=>{
    const fetchMovies = async () =>{
      const response = await getAllMovies();
      console.log(response?.data?.movies)
      setMovies(response?.data?.movies);
    }
    fetchMovies();
  },[])
  return (
    <>
      <Navbar currentUser={currentUser}/>
      {movies.map((movie)=>{
        return <MovieCard key={movie._id} movie={movie}/>
      })}
    </>
  )
}

export default App
