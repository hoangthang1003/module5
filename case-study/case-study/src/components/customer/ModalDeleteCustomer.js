import React from "react";
import Swal from 'sweetalert2/dist/sweetalert2.js'

import {customerService} from "../../service/CustomerService";

export default function ModalDeleteCustomer(props) {
    const handleDelete = async (id) => {
        await customerService.deleteCustomer(id);
        props.getList()
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
        })
    }

    return (
        <div className="modal" tabIndex={-1} id={"exampleModal"}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-danger">Bảng xóa khách hàng</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        <div>Bạn có muốn xóa <h5 className={"text-danger"}>{props.name}</h5></div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" data-bs-dismiss="modal"
                                className="btn btn-danger" onClick={() => handleDelete(props.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}