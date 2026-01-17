import React from "react"
import { useSelector} from "react-redux"
import { Navigate } from "react-router"

const PublicRoute = ({children})=>{
    const {userData, loading} = useSelector((state) => state.user);
    if(userData) {
        return <Navigate to="/"/>
    }
    return children
}

export default PublicRoute