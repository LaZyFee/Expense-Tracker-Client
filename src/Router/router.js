import Main from "../Layouts/Main";
import Login from "../Pages/UserAuthenticationPages/Login";
import SignUp from "../Pages/UserAuthenticationPages/SignUp";
import ForgetPassword from "../Pages/UserAuthenticationPages/ForgetPassword";
import ResetPassword from "../Pages/UserAuthenticationPages/ResetPassword";


import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Shared/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,

        children: [
            {
                path: "/home",
                element: <Home />
            }


        ]

    },

    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/forgot-password",
        element: <ForgetPassword />
    },
    {
        path: "/reset-password",
        element: <ResetPassword />

    }

]);
