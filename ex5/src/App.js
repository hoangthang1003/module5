import logo from './logo.svg';
import './App.css';


import {Route, Routes} from "react-router";
import React from "react";
import {CreateBlog} from "./component/CreateBlog";
import {UpdateBlog} from "./component/UpdateBlog";
import {BlogList} from "./component/Blog";
import {Detail} from "./component/Detail";

function App() {
  return (
      <Routes>
        <Route path="/" element={<BlogList/>}/>
        <Route path="addBlog" element={<CreateBlog/>}/>
        <Route path="detail/:id" element={<Detail/>}/>
        <Route path='/updateBlog/:id' element={<UpdateBlog/>}/>
      </Routes>
  );
}

export default App;
