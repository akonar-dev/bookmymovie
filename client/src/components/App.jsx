import { useEffect, useState } from "react"
import { getUserData } from "../api/auth_api"
import { getAllMovies } from "../api/movie_api.js";
import Navbar from "./Navbar.jsx";
import MovieCard from "./MovieCard.jsx";
import { useSelector, useDispatch } from "react-redux";
import {getUser} from "../redux-toolkit/userReducer.js"
function App() {

  const [currentUser, setCurrentUser] = useState("")
  const [movies, setMovies] = useState([])
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.user.userData);
  //console.log(userData,"value from redux store");

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const user = await getUserData();
  //     console.log(user.data.user.firstname)
  //     setCurrentUser(user.data.user.firstname);
  //     dispatch(getUser(user.data.user.firstname))
  //   };
  //   fetchUser();
  // }, []);

  useEffect(()=>{
    const fetchMovies = async () =>{
      const response = await getAllMovies();
      //console.log(response?.data?.movies)
      setMovies(response?.data?.movies);
    }
    fetchMovies();
  },[])
  return (
    <>
      <Navbar currentUser={userData}/>
      {movies.map((movie)=>{
        return <MovieCard key={movie._id} movie={movie}/>
      })}
    </>
  )
}

export default App
