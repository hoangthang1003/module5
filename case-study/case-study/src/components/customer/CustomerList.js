import React, {useEffect, useState} from "react";
import {customerService} from "../../service/CustomerService";
import ModalDeleteCustomer from "./ModalDeleteCustomer";
import {Link} from "react-router-dom";

function CustomerList() {
    const [customerList, setCustomerList] = useState([]);
    const [customerTypeList, setCustomerTypeList] = useState([]);


    const customerTypes = async () => {
        const result = await customerService.customerTypeList();
        setCustomerTypeList(result)
    };
    const findAll = async () => {
        try {
            const result = await customerService.findAll();
            setCustomerList(result);
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        findAll()
        customerTypes()
    }, [])


    const [deleteId, setDeleteId] = useState(null)
    const [deleteName, setDeleteName] = useState("")
    const getPropsCustomer = (id, name) => {
        setDeleteId(id)
        setDeleteName(name)
    }
    return (
        <>
            <div className="row mx-0 mt-5" style={{height: 500}}>
                <div className="col-12 px-0">
                    <div>
                        <h2 className="text-center fw-bold pt-4">Danh Sách Tất Cả Các Khách Hàng</h2>
                    </div>
                    <div>
                        <Link to={"addCustomer"} className={"btn btn-primary"}>Thêm Khách Hàng Mới</Link>
                    </div>
                    <div className="col-lg-12">
                        <table id="tableCustomer" className="table">
                            <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên khách hàng</th>
                                <th>Ngày sinh</th>
                                <th>Giới Tính</th>
                                <th>CMND</th>
                                <th>Số điện thoại</th>
                                <th>Email</th>
                                <th>Địa chỉ</th>
                                <th>Loại khách hàng</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {customerList.map((customer, index) =>

                                <tr key={index}>
                                    <td>{customer.id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.dateOfBirth}</td>
                                    <td>{customer.gender}</td>
                                    <td>{customer.idCard}</td>
                                    <td>{customer.phoneNumber}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.address}</td>
                                    <td>{customerTypeList.filter(ct => ct.id === customer.customerType)[0]?.name}</td>
                                    <td>
                                        <button className='btn btn-primary'>Edit</button>

                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                            onClick={() => getPropsCustomer(customer.id, customer.name)}
                                        >Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <ModalDeleteCustomer
                id={deleteId}
                name={deleteName}
                getList={
                    () => {
                        findAll()
                    }
                }
            />
        </>
    );
}

export default CustomerList;
