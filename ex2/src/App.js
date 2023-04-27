import './App.css';
import {BlogList} from "./component/Blog";
import React from "react";
import {Routes , Route} from "react-router";
import {CreateBlog} from "./component/CreateBlog";

function App() {
  return (
      <Routes>
        <Route path="/" element={<BlogList/>}/>
        <Route path="addBlog" element={<CreateBlog/>}/>
      </Routes>

  );
}

export default App;
