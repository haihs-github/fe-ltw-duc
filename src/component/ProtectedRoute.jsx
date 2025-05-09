import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoute({isAuthenticated, redirectPath='/login'}) {
    if(!isAuthenticated) {
        return <Navigate to={redirectPath} replace ></Navigate>
    }
    return <Outlet/>
}
export default ProtectedRoute