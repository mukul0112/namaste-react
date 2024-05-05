import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Body";
import Header from "./Header";
import AboutUs from "./AboutUs";
import Error from "./Error";
import ContactUs from "./ContactUs"
import RestaurantDetails from "./RestaurantDetails";
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";



const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[{
      path:"/",
      element:<Body/>
    },{
      path:"/AboutUs",
      element:<AboutUs/>
    },
    {
      path:"/ContactUs",
      element:<ContactUs/>
    }],
    errorElement:<Error/>,
  },
  {
    path:"/RestaurantDetails/:resId",
    element:<RestaurantDetails/>
  }
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
