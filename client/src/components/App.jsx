import { useEffect, useState } from "react"
import { getUserData } from "../api/auth_api"
function App() {

  const [currentUser, setCurrentUser] = useState("")
   useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserData();
      console.log(user.data.user.firstname)
      setCurrentUser(user.data.user.firstname);
    };
    fetchUser();
  }, []);
  return (
    <>
      <h1>BookMyMovie Home. Welcome {currentUser.toUpperCase()}</h1>
    </>
  )
}

export default App
