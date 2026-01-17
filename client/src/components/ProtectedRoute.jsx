import React from "react"
import { useSelector} from "react-redux"
import { Navigate } from "react-router"

const ProtectedRoute = ({children})=>{
    const userData = useSelector((state) => state.user.userData);
    console.log(userData,"userdata")
    if(!userData) {
        return <Navigate to="/login"/>
    }
    return children
}

export default ProtectedRoute