import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import {customerService} from "../../service/CustomerService";

function CustomerCreate() {
    let navigate = useNavigate();
    const [customerTypeList, setCustomers] = useState([]);

    const customerType = async () => {
        const result = await customerService.customerTypeList();
        setCustomers(result)
    }

    useEffect(() => {
        customerType();
    }, [])
    return (
        <>
            <Formik
                initialValues={{ name: '', gender: '',dateOfBirth:'', idCard: '', phoneNumber: '', address: '', customerType: '1' }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Không được để trống').min(2, 'độ dài ký tự phải từ 2 trở lên'),
                    gender: Yup.string()
                        .required('Không được để trống'),
                    dateOfBirth: Yup.string()
                        .required('Không được để trống'),
                    idCard: Yup.number()
                        .required('Không được để trống'),
                    phoneNumber: Yup.string()
                        .required('Không được để trống').min(10, 'số điện thoại phải dài ít nhất 10 số và nhiều nhất 12 số')
                        .max(12, 'số điện thoại phải dài ít nhất 10 số và nhiều nhất 12 số'),
                    address: Yup.string()
                        .required('Không được để trống')

                })}
                onSubmit={(values) => {
                    console.log(values)
                    const create = async () => {
                        await customerService.addCustomer(values);
                        navigate('/')
                    };
                    create();
                }
                }
            >

                <Form >
                    <h1 className='mb'>Create Customer</h1>
                    <div className="mb-3">
                        <label htmlFor="name">Name: <span>*</span></label>
                        <Field type="text" className="form-control" id="name"
                               name='name'
                        />
                        <ErrorMessage name='name' component='span' className='form-err' />


                    </div>
                    <div className="mb-3">
                        <label htmlFor="dateOfBirth">Date Of Birth: <span>*</span></label>
                        <Field type="date" className="form-control" id="dateOfBirth"
                               name='dateOfBirth'
                        />
                        <ErrorMessage name='dateOfBirth' component='span' className='form-err' />


                    </div>
                    <div className="mt-3 form-group">
                        <label style={{ fontWeight: "bold" }}>
                            Giới tính:<span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="d-flex">
                            <label className="d-block me-4">
                                <Field type="radio" name="gender" value="Nam" />Nam
                            </label>
                            <label className="d-block">
                                <Field type="radio" name="gender" value="Nữ" /> Nữ
                            </label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age">Id Card: <span>*</span></label>

                        <Field type="text" className="form-control" id="idCard"
                               name='idCard'
                        />
                        <ErrorMessage name='idCard' component='span' className='form-err' />

                    </div>

                    <div className="mb-3">
                        <label htmlFor="idCard"> Phone Number  <span>*</span></label>

                        <Field type="text" className="form-control" id="phoneNumber"
                               name='phoneNumber'
                        />
                        <ErrorMessage name='phoneNumber' component='span' className='form-err' />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="email"> email  <span>*</span></label>

                        <Field type="text" className="form-control" id="email"
                               name='email'
                        />
                        <ErrorMessage name='email' component='span' className='form-err' />

                    </div>

                    <div className="mb-3">
                        <label htmlFor="address"> Address  <span>*</span></label>

                        <Field type="text" className="form-control" id="address"
                               name='address'
                        />
                        <ErrorMessage name='address' component='span' className='form-err' />

                    </div>
                    <div>
                        <label htmlFor="customerType">Loại khách hàng: <span>*</span></label>
                        <Field as='select' name='customerType' >
                            {
                                customerTypeList.map((customerType) => (
                                        <option key={customerType.id} value={customerType.id} id="customerType">
                                            {customerType.name} </option>
                                    )
                                )
                            }
                        </Field>
                    </div>
                    <div>
                        <button type='submit' className='btn btn-primary'>Submit</button></div>
                </Form>
            </Formik>
        </>

    );
}

export default CustomerCreate;