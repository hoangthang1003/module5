import React, {useState} from "react";
import {Field, Form, Formik} from "formik";

export function Greeting1() {
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')

    return (
        <>
        <Formik initialValues={{firstName:'',lastName:''}} onSubmit={values => {
            const handleChange = () => {
                setFirstName(values.firstName)
                setLastName(values.lastName)
            }
            handleChange()
        }}>
            <Form>
                <label>First Name</label>
                <Field id={"firstName"} name={"firstName"}/>
                <label>last Name</label>
                <Field id={"lastName"} name={"lastName"}/>
                <button type="submit">Submit</button>
            </Form>
        </Formik>

            <ul>
                <li>
                    {firstName}
                </li>
                <li>
                    {lastName}
                </li>
            </ul>
        </>
    )
}