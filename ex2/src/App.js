import './App.css';
import {BlogList} from "./component/Blog";
import React from "react";
import {Routes , Route} from "react-router";
import {CreateBlog} from "./component/CreateBlog";
import {UpdateBlog} from "./component/UpdateBlog";

function App() {
  return (
      <Routes>
        <Route path="/" element={<BlogList/>}/>
        <Route path="addBlog" element={<CreateBlog/>}/>
        <Route path='/updateBlog/:id' element={<UpdateBlog/>}/>
      </Routes>

  );
}

export default App;
