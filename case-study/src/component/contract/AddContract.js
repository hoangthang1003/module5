import React, {Component} from "react";
import {Formik} from "formik";
import * as Yup from 'yup';

class AddContract extends Component {
    render() {
        return (
            <>
                <Formik initialValues={{
                    facility: '',
                    customer: '',
                    startDate: '',
                    endDate: '',
                    deposit: '',
                    totalMoney: '',
                }}
                        validationSchema={Yup.object({
                            facility: Yup.string().required("Required"),
                            customer: Yup.string().required("Required"),
                            startDate: Yup.string().required("Required"),
                            endDate: Yup.string().required("Required"),
                            deposit: Yup.string().required("Required"),
                            totalMoney: Yup.string().required("Required"),
                        })}

                 onSubmit={}>
                    <div className="contact-us">
                        <h1>Add Contract</h1>
                        <form>
                            <label htmlFor="idContract">Mã hợp đồng:</label>
                            <input type="text" id="idContract" name="idContract" required=""/>
                            <label htmlFor="customer">Customer:</label>
                            <input type="text" id="customer" name="customer" required=""/>
                            <label htmlFor="numberOfGuests">Number Of Guests:</label>
                            <input type="text" id="numberOfGuests" name="numberOfGuests" required=""/>
                            <label htmlFor="startDay">Check In:</label>
                            <input type="date" id="startDay" name="startDay" required=""/>
                            <label htmlFor="endDay">Check Out:</label>
                            <input type="date" id="endDay" name="endDay" required=""/>
                            <label htmlFor="money">Deposits:</label>
                            <input type="text" id="money" name="money" required=""/>
                            <label htmlFor="idRoom">Id Room:</label>
                            <input type="text" id="idRoom" name="idRoom" required=""/>
                            <label htmlFor="total">Tổng số tiền thanh toán:</label>
                            <input type="text" id="total" name="total" required=""/>
                            <input type="submit" defaultValue="Gửi"/>
                        </form>
                    </div>
                </Formik>
            </>
        );
    }
}

export default AddContract;