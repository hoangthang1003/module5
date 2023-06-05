import React, {useEffect, useState} from 'react';
import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {customerService} from "../../service/CustomerService";
import {useNavigate} from "react-router";

function AddCustomer() {
    const navigate = useNavigate()
    const [customerTypeList, setCustomerTypeList] = useState([]);
    const customerTypes = async () => {
        const result = await customerService.customerTypeList();
        setCustomerTypeList(result)
    };
    useEffect(() => {
        customerTypes()
    }, [])
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    dateOfBirth: '',
                    // gender: '',
                    idCard: '',
                    phoneNumber: '',
                    email: '',
                    address: '',
                    customerType: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Không được để trống').min(2, 'độ dài ký tự phải từ 2 trở lên'),
                    dateOfBirth: Yup.string()
                        .required('Không được để trống'),
                    // gender: Yup.number()
                    //     .required('Không được để trống'),
                    idCard: Yup.number()
                        .required('Không được để trống'),
                    email: Yup.string()
                        .required('Không được để trống'),
                    phoneNumber: Yup.string()
                        .required('Không được để trống').min(10, 'số điện thoại phải dài ít nhất 10 số và nhiều nhất 12 số')
                        .max(12, 'số điện thoại phải dài ít nhất 10 số và nhiều nhất 12 số'),
                    address: Yup.string()
                        .required('Không được để trống'),

                })}
                onSubmit={(values) => {
                    console.log(values)
                    const addCustomer = async () => {
                        const data = {
                            ...values,
                            customerType:parseInt(values.customerType)
                        }
                        await customerService.addCustomer(data);
                        navigate('/customers')

                    };
                    addCustomer()
                }

                }
            >
                <Form>
                    <h1 className='mb'>Create Customer</h1>
                    <div className="mb-3">
                        <label htmlFor="name">Name: <span>*</span></label>
                        <Field type="text" className="form-control" id="name"
                               name='name'
                        />
                        <ErrorMessage name='name' component='span' className='form-err'/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="dateOfBirth">Ngày Sinh: <span>*</span></label>

                        <Field type="date" className="form-control" id="dateOfBirth"
                               name='dateOfBirth'
                        />
                        <ErrorMessage name='dateOfBirth' component='span' className='form-err'/>

                    </div>
                    {/*<div className="mt-3 form-group">*/}
                    {/*    <label style={{ fontWeight: "bold" }}>*/}
                    {/*        Giới tính:<span style={{ color: "red" }}>*</span>*/}
                    {/*    </label>*/}
                    {/*    <div className="d-flex">*/}
                    {/*        <label className="d-block me-4">*/}
                    {/*            <Field type="radio" name="gender" value="Nam" />Nam*/}
                    {/*        </label>*/}
                    {/*        <label className="d-block">*/}
                    {/*            <Field type="radio" name="gender" value="Nữ" /> Nữ*/}
                    {/*        </label>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="mb-3">
                        <label htmlFor="idCard">CMND: <span>*</span></label>

                        <Field type="text" className="form-control" id="idCard"
                               name='idCard'
                        />
                        <ErrorMessage name='idCard' component='span' className='form-err'/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber">Số điện thoại: <span>*</span></label>

                        <Field type="text" className="form-control" id="phoneNumber"
                               name='phoneNumber'
                        />
                        <ErrorMessage name='phoneNumber' component='span' className='form-err'/>

                    </div>

                    <div className="mb-3">
                        <label htmlFor="email"> email <span>*</span></label>

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
                    <Field as="select" className="form-control" name="customerType">
                        {customerTypeList.map((customer) => (
                            <option key={customer.id} value={customer.id}>{customer.name}</option>
                        ))}
                    </Field>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </Form>
            </Formik>
        </>
    );
}

export default AddCustomer;