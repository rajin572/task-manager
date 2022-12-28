import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/layout/Main";
import Home from "../../components/Pages/Home/Home";
import Login from "../../components/Pages/Login/Login";
import Signup from "../../components/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/signin',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<Signup></Signup>
            }
        ]
    }
])
export default router;