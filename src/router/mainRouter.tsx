import {createBrowserRouter} from "react-router-dom"
import LayOut from "../Components/Static/LayOut"
import SignIn from "../Components/Pages/Auth/SignIn"
import Register from "../Components/Pages/Auth/Register"
import ResetPassword from "../Components/Pages/Auth/ResetPassword"

export const mainRouter = createBrowserRouter([
    {
        path:"/",
        element:<LayOut/>,
        children:[
            {
            path:"Register",
            index:true,
            element:<Register/>
        },
            {
            path:"SignIn",
            element:<SignIn/>
        },
            {
            path:"Reset",
            element:<ResetPassword/>
        },
    ]
    }
])