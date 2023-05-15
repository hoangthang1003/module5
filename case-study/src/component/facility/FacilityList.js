import {NavLink} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {facilityService} from "../../service/FacilityService";

function FacilityList() {
    const [facility, setFacility] = useState([]);

    const list = async () => {
        const result = await facilityService.findAll()
        setFacility(result)
    }

    const handleDelete = async (id) => {
        await facilityService.remove(id)
        setFacility(facility.filter(p => p.id !== id))
    }

    const [idDelete, setIdDelete] = useState('');
    const [nameDelete, setNameDelete] = useState('')
    const getInfoDelete = (id, name) => {
        setIdDelete(id)
        setNameDelete(name)
    }

    useEffect(() => {
        list()
            .then()
    }, [])

    return (
        <>
            <div style={{ maxWidth: "2000px", marginTop: "70px" }}>
                <div className="row mt-5">
                    <div className="col-lg-12 text-center">
                        <h1>Facility Type</h1>
                    </div>
                </div>

                <div className="room container">
                    <div className="element-button mb-5 text-end">
                        <button type='button' className='btn btn-warning ms2'>
                            <NavLink to='/customer-create'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                     fill="currentColor"
                                     className="bi bi-cloud-plus" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/>
                                    <path
                                        d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                                </svg>
                            </NavLink>
                        </button>
                    </div>
                    <div className="row">
                        {facility.map((facility, index) => (
                            <div className="col-4" key={index}>
                                <div className="card">
                                    <img
                                        src={facility.facilityImg}
                                        className="card-img-top"
                                        alt="..."
                                        width={370}
                                        height={239}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{facility.facilityName}</h5>
                                        <p className="card-text">{facility.facilityArea}</p>
                                        <button className='btn btn-danger' type="button" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                                onClick={() => getInfoDelete(facility.id, facility.facilityName)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                 fill="currentColor"
                                                 className="bi bi-trash" viewBox="0 0 16 16">
                                                <path
                                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                <path fillRule="evenodd"
                                                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                            </svg>
                                        </button>
                                        <a
                                            className="btn btn-primary btn-sm edit"
                                            href=""
                                        >
                                            <i className="fas fa-edit">Chỉnh sửa</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        <i className="ti-angle-left"/>
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        1
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        2
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        3
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        <i className="ti-angle-right"/>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* modal */}
                <div
                    className="modal fade" id="exampleModal" tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                    Delete post
                                </h1>
                                <button
    type="button"
    className="btn-close"
    data-bs-dismiss="modal"
    aria-label="Close"
    />
                            </div>
                            <div className="modal-body">Do you want to delete <span className='fw-bold'>{nameDelete}</span> post ?</div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    onClick={() => handleDelete(idDelete)}
                                    data-bs-dismiss="modal"
                                    type="button"
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FacilityList;