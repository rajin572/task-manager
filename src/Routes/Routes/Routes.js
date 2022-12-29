import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/layout/Main";
import AddTaskRoute from "../../components/Pages/AddTask/AddTaskRoute";
import Home from "../../components/Pages/Home/Home";
import Login from "../../components/Pages/Login/Login";
import MyTask from "../../components/Pages/MyTask/MyTask";
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
                path: '/addtask',
                element:<AddTaskRoute></AddTaskRoute>
            },
            {
                path: '/mytask',
                element:<MyTask></MyTask>
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