import Main from "../Layouts/Main";
import Login from "../Pages/UserAuthenticationPages/Login";
import Register from "../Pages/UserAuthenticationPages/Register";
import ForgetPassword from "../Pages/UserAuthenticationPages/ForgetPassword";
import ResetPassword from "../Pages/UserAuthenticationPages/ResetPassword";


import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,

        children: [


        ]

    },

    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
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
