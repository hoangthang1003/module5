import './App.css';
import Header from "./component/Header";
import React from "react";

import AddCustomer from "./component/customer/AddCustomer";
import {Route, Routes} from "react-router";
import {EditCustomer} from "./component/customer/EditCustomer";
import Footer from "./component/Footer";
import FacilityList from "./component/facility/FacilityList";
import CustomerList from "./component/customer/CustomerList";
import {ContractList} from "./component/contract/ContractList";
import Home from "./component/Home";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/customers'} element={<CustomerList/>}/>
                <Route path={'/facilities'} element={<FacilityList/>}/>
                <Route path={'/contracts'} element={<ContractList/>}/>
                <Route path={'/addCustomer'} element={<AddCustomer />}/>
                <Route path={'/customers/editCustomer/:id'} element={<EditCustomer />}/>

            </Routes>
            <Footer/>
        </>
    )

}

export default App;
