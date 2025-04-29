import { createBrowserRouter, RouterProvider } from "react-router";
import Main from "../Layout/Main";
import Home from "../Home";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Main />,
        children:[
            {
                path:"/",
                element: <Home />
            }
        ]
    }
])
const Routes =()=>{
return(
     <RouterProvider router={router}></RouterProvider>
)
}
export default Routes;