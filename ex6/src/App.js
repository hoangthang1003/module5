import './App.css';
import {BlogList} from "./component/BlogList";
import React from "react";
import {Route, Routes} from "react-router";
import {AddBlog} from "./component/CreateBLog";

function App() {
  return (
      <Routes>
        <Route path="addBlog" element={<AddBlog/>}/>
        <Route path="/" element={<BlogList/>}/>
      </Routes>

  );
}

export default App;
