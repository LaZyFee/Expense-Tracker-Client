import Main from "../Layouts/Main";
import Login from "../Pages/UserAuthenticationPages/Login";
import SignUp from "../Pages/UserAuthenticationPages/SignUp";
import ForgetPassword from "../Pages/UserAuthenticationPages/ForgetPassword";
import ResetPassword from "../Pages/UserAuthenticationPages/ResetPassword";


import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Shared/Home";
import InputExpense from "../Pages/InputExpense";
import Statics from "../Pages/Statics";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,

        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/expense",
                element: <InputExpense />
            },
            {
                path: "/statics",
                element: <Statics />
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
