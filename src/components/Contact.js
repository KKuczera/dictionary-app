import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./Home";
import Dictionary from "./Dictionary";

const router = createBrowserRouter([
    { path: '/', element: <Home/> },
    { path: '/contact', element: <Contact/> },
    { path: '/app', element: <Dictionary/> },
  ])

function Contact(){
    return(
        <div>
            <RouterProvider router={router}/>
            
            <h2>Hello on our page! We hope yu'll enjoy this app.</h2>
        </div>
    )
}

export default Contact;