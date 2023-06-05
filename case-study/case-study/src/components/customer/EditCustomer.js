import {Component} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';

class EditCustomer extends Component {


    render() {
        return (
            <>
                <Formik
                    initialValues={{name: '', age: '', phoneNumber: '', address: ''}}
                    // validationSchema={Yup.object({
                    //     name: Yup.string()
                    //         .required('Không được để trống').min(2, 'độ dài ký tự phải từ 2 trở lên'),
                    //     age: Yup.number()
                    //         .required('Không được để trống'),
                    //     phoneNumber: Yup.string()
                    //         .required('Không được để trống').min(10, 'số điện thoại phải dài ít nhất 10 số và nhiều nhất 12 số')
                    //         .max(12, 'số điện thoại phải dài ít nhất 10 số và nhiều nhất 12 số'),
                    //     address: Yup.string()
                    //         .required('Không được để trống'),
                    //
                    // })}
                    onSubmit={(values) => {
                        console.log(values)
                    }
                    }
                >

                    <Form>
                        <h1 className='mb'>Edit Customer</h1>
                        <div className="mb-3">
                            <label htmlFor="name">Name: <span>*</span></label>
                            <Field type="text" className="form-control" id="name"
                                   name='name'
                            />
                            <ErrorMessage name='name' component='span' className='form-err'/>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="age">Age: <span>*</span></label>

                            <Field type="text" className="form-control" id="age"
                                   name='age'
                            />
                            <ErrorMessage name='age' component='span' className='form-err'/>

                        </div>

                        <div className="mb-3">
                            <label htmlFor="phoneNumber"> Phone Number <span>*</span></label>

                            <Field type="text" className="form-control" id="phoneNumber"
                                   name='phoneNumber'
                            />
                            <ErrorMessage name='phoneNumber' component='span' className='form-err'/>

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
                            <select id="customerType" className="form-control" name="customerType">
                                <option></option>
                            </select>
                            <span></span>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </Formik>
            </>

        );
    }
}

export default EditCustomer;