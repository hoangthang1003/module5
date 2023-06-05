import {customerService} from "../../service/CustomerService";
import React from "react";
import {contractService} from "../../service/ContractService";

export default function ModalDeleteContract(props) {
    const handleDelete = async  (id) => {
        await contractService.deleteContract(id);

    }

    return(
        <div className="modal" tabIndex={-1} id={"exampleModal"}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Bảng xóa hợp đồng</h5>
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
                        <button type="button"                  data-bs-dismiss="modal"
                                className="btn btn-danger" onClick={() => handleDelete(props.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>



    )
}