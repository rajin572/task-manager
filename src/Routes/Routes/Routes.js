import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/layout/Main";
import AddTaskRoute from "../../components/Pages/AddTask/AddTaskRoute";
import CompleteTask from "../../components/Pages/CompleteTask/CompleteTask";
import ErrorPage from "../../components/Pages/ErrorPage/ErrorPage";
import Home from "../../components/Pages/Home/Home";
import Login from "../../components/Pages/Login/Login";
import MyTask from "../../components/Pages/MyTask/MyTask";
import Signup from "../../components/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path: '/addtask',
                element:<PrivateRoute><AddTaskRoute></AddTaskRoute></PrivateRoute>
            },
            {
                path: '/mytask',
                element:<PrivateRoute><MyTask></MyTask></PrivateRoute>
            },
            {
                path: '/completeTask',
                element:<PrivateRoute><CompleteTask></CompleteTask></PrivateRoute>
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
    },
    {
        path: '*',
        element:<ErrorPage></ErrorPage>
    }
])
export default router;