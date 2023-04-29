import './App.css';
import Header from "./component/Header";
import React from "react";
import Footer from "./component/Footer";
// import Home from "./component/Home";
// import AddFacility from "./component/facility/AddFacility";
// import EditFacility from "./component/facility/EditFacility";
// import FacilityList from "./component/facility/FacilityList";
import CustomerList from "./component/customer/CustomerList";

function App() {
    return (
        <>
            <Header/>
            {/*<Home/>*/}
            {/*<AddFacility />*/}
            {/*<EditFacility />*/}
            {/*<FacilityList />*/}
            <CustomerList />
            <Footer/>
        </>
    )

}

export default App;
