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

import Contact from "./routes/contact";
import PostList from "./components/PostList";
import {Route, Link, Routes} from 'react-router-dom';
import { response } from 'express';
import { json } from 'express';
import e from 'express';

export default function App() {
  return (
    
    <>
      
      <Header />
      <nav>
        <ul>
          <li>
            
          </li>
          <li>
            
          </li>	
          <PostList />
        </ul>
        
      </nav>

      <Routes>
        
        <Route path="/" element={<Content />} />
        <Route path="/contact" element={<Contact />}></Route>
        
      </Routes>
    </>
    
  );
}




