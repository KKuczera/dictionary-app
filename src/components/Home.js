import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from "./Contact";
import Dictionary from "./Dictionary";

const router = createBrowserRouter([
    { path: '/', element: <Home/> },
    { path: '/contact', element: <Contact/> },
    { path: '/app', element: <Dictionary/> },
  ])

function Home(){
    return(
        <div>
            <RouterProvider router={router}/>
            
            <h2>Hello on our home page! We hope yu'll enjoy this app.</h2>
        </div>
    )
}

export default Home;