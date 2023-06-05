import React, { useState} from "react";
import  {contract} from "./Contract";
import ModalDeleteContract from "./ModalDeleteContract";

function ContractList(){
    const [deleteId, setDeleteId] = useState(null)
    const [deleteName, setDeleteName] = useState("")
    const getPropsContract = (id, name) => {
        setDeleteId(id)
        setDeleteName(name)
    }
        return (
            <>
                <div>
                    <center>
                        <h1>DANH SÁCH HỢP ĐỒNG</h1>
                    </center>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Stt</th>
                            <th>Facility</th>
                            <th>Customer</th>
                            <th>Date Start</th>
                            <th>Date End</th>
                            <th>Deposit</th>
                            <th>Total Money</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            contract.map((contractList, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{contractList.facility.name}</td>
                                    <td>{contractList.customer.name}</td>
                                    <td>{contractList.dateStart}</td>
                                    <td>{contractList.dateEnd}</td>
                                    <td>{contractList.deposit}</td>
                                    <td>{contractList.totalMoney}</td>
                                    <td>
                                        <button className="btn btn-outline-secondary" style={{color: "blue"}}>Edit</button>
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                            onClick={() => getPropsContract(contractList.id, contractList.facility.name)}
                                        >Delete
                                        </button>
                                    </td>

                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <ModalDeleteContract
                    id={deleteId}
                    name={deleteName}
                />
            </>
        );

}
export default ContractList;