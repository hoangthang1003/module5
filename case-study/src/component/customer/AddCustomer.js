import {Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import {customerService} from "../../service/CustomerService";

export function AddCustomer() {
    const [customerTypes, setCustomerType] = useState([])
    const customerTypeList = async () => {
        const result = await customerService.customerTypeList()
        setCustomerType(result)
    }
    useEffect(() => {
        customerTypeList()
    }, [])
    return (
        <>
            <Formik initialValues={{
                name: '',
                dateOfBirth: '',
                gender: '',
                idCard: '',
                phoneNumber: '',
                email: '',
                address: '',
                customerType: ''
            }} onSubmit={(values) => {
                const addCustomer = (async () => {
                    await customerService.addCustomer(values)
                })
                addCustomer()
            }}>
                <Form>
                    <div>
                        <label>Name :</label>
                        <Field id="name" name="name"/>
                    </div>
                    <div>
                        <label>Date Of Birth :</label>
                        <Field id="dateOfBirth" name="dateOfBirth" type="date"/>
                    </div>
                    <div>
                        <label>Gender :</label>
                        <Field id="gender" name="gender" type="text"/>
                    </div>
                    <div>
                        <label>Id Card :</label>
                        <Field id="idCard" name="idCard"/>
                    </div>
                    <div>
                        <label>Phone Number :</label>
                        <Field id="phoneNumber" name="phoneNumber"/>
                    </div>
                    <div>
                        <label>Email :</label>
                        <Field id="email" name="email"/>
                    </div>
                    <div>
                        <label>Address :</label>
                        <Field id="address" name="address"/>
                    </div>
                    <div>
                        <label>Customer Type :</label>
                        <Field as="select" name="customerType">
                            {customerTypes.map((customer) => (
                                <option key={customer.id} value={customer.id}>{customer.name}</option>
                            ))}
                        </Field>
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    )
}