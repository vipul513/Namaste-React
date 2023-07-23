import React from "react";
import ReactDOM from "react-dom/client";
import { Header, Body, About, Contact, RestaurantMenu} from "./components/index";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

const AppLayout = () => (
    <div className="app">
        <Header />
        <Outlet />
    </div>
);

const appRouter = createBrowserRouter([
    {
        path: "/", 
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body /> 
            },
            {
                path: "/about",
                element: <About /> 
            },
            {
                path: "/contact",
                element: <Contact /> 
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            }
        ]
    }
])

const rootElm = ReactDOM.createRoot(document.getElementById("root"));

// if you want to render react component write it in <../>
rootElm.render(<RouterProvider router={appRouter} />);