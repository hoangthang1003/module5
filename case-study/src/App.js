import './App.css';
import Header from "./component/Header";
import React from "react";

import CustomerList from "./component/customer/CustomerList";
import AddCustomer from "./component/customer/AddCustomer";
import {Route, Routes} from "react-router";
import {EditCustomer} from "./component/customer/EditCustomer";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<CustomerList />}/>
                <Route path={"/addCustomer"} element={<AddCustomer />}/>
                <Route path={`/editCustomer/:id`} element={<EditCustomer />}/>
            </Routes>

        </>
    )

}

export default App;
