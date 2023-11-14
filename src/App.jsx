import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header.jsx";
import Content from "./components/Content";
import './css/index.css';
import {
  BrowserRouter,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./routes/root"
import Contact from "./routes/contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Header/>,
      children: [
        {
            path: "contacts/:contactId", 
            element: <Contact />,
        },
      ], 
    },
  ]);

function App() {
    return (
      
      
        <div className="wrapper">
            <RouterProvider router={router} />
            <Content />
            <Footer />
        </div>
    
    );
}


export default App;

