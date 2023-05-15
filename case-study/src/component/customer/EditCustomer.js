import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {customerService} from "../../service/CustomerService";

export function EditCustomer() {

    const params = useParams()
    const [customer, setCustomer] = useState(null)
    const [customerTypes, setCustomerTypes] = useState(null)
    const navigate = useNavigate()
    const findById = async () => {
        const result = await customerService.findById(params.id)
        setCustomer(result)
    }
    const customerTypeList = async () => {
        const result = await customerService.customerTypeList()
        setCustomerTypes(result)
    }
    useEffect(() => {
        findById()
        customerTypeList()
    }, [])
    if (!customer) {
        return null;
    }

    return (
        <>
            <Formik
                initialValues={{
                    id: customer?.id,
                    name: customer?.name,
                    dateOfBirth: customer?.dateOfBirth,
                    gender: customer?.gender,
                    idCard: customer?.idCard,
                    phoneNumber: customer?.phoneNumber,
                    email: customer?.email,
                    address: customer?.address,
                    customerType: customer?.customerType
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("REQUIRED_VALIDATION"),
                    dateOfBirth: Yup.string().required("REQUIRED_VALIDATION"),
                    gender: Yup.string().required("REQUIRED_VALIDATION"),
                    idCard: Yup.string().required("REQUIRED_VALIDATION"),
                    phoneNumber: Yup.string().required("REQUIRED_VALIDATION"),
                    email: Yup.string().required('REQUIRED_VALIDATION'),
                    address: Yup.string().required('REQUIRED_VALIDATION'),

                })}
                onSubmit={(values) => {
                    customerService.editCustomer(values)
                    navigate('/')
                }
                }
            >

                <Form>
                    <h1 className='mb'>Edit Customer</h1>
                    <div className="mb-3">
                        <Field type="hidden" className="form-control" id="id"
                               name='id'
                        />


                    </div>
                    <div className="mb-3">
                        <label htmlFor="name">Name: <span>*</span></label>
                        <Field type="text" className="form-control" id="name"
                               name='name'
                        />
                        <ErrorMessage name='name' component='span' className='form-err'/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="date">Date Of Birth: <span>*</span></label>

                        <Field type="date" className="form-control" id="dateOfBirth"
                               name='dateOfBirth'
                        />
                        <ErrorMessage name='dateOfBirth' component='span' className='form-err'/>

                    </div>

                    <div className="mb-3">
                        <label htmlFor="gender"> Phone Number <span>*</span></label>

                        <Field type="text" className="form-control" id="gender"
                               name='gender'
                        />
                        <ErrorMessage name='gender' component='span' className='form-err'/>

                    </div>

                    <div className="mb-3">
                        <label htmlFor="idCard"> ID Card <span>*</span></label>

                        <Field type="text" className="form-control" id="idCard"
                               name='idCard'
                        />
                        <ErrorMessage name='idCard' component='span' className='form-err'/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber"> Phone Number <span>*</span></label>

                        <Field type="text" className="form-control" id="phoneNumber"
                               name='phoneNumber'
                        />
                        <ErrorMessage name='phoneNumber' component='span' className='form-err'/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="email"> Email <span>*</span></label>

                        <Field type="text" className="form-control" id="email"
                               name='email'
                        />
                        <ErrorMessage name='email' component='span' className='form-err'/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="address"> Address <span>*</span></label>

                        <Field type="text" className="form-control" id="address"
                               name='address'
                        />
                        <ErrorMessage name='address' component='span' className='form-err'/>

                    </div>
                    <label htmlFor="customerType">Loại khách hàng: <span>*</span></label>
                    <div>
                        <Field as="select" id="customerType" className="form-control" name="customerType">
                            {customerTypes.map((ct,index) =>(
                                <option key={index} value={ct.id}>{ct.name}</option>
                            ))}
                        </Field>
                        <span></span>
                    </div>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </Form>
            </Formik>
        </>


    )
}