import './App.css';
import {Product} from "./component/Product";
import React from "react";
import {Route, Routes} from "react-router";
import {UpdateProduct} from "./component/UpdateProduct";

function App() {
  return (
      <>
      <Routes>
          <Route path={"/"} element={<Product/>}/>
          <Route path={'/edit/:id'} element={<UpdateProduct/>}/>
      </Routes>
      </>
  );
}

export default App;
