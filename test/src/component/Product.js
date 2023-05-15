import React, {useEffect, useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {productById, searchProduct, searchProductType} from "../service/ProductService";
import ReactPaginate from "react-paginate";


export function Product() {
    const [productList, setProductList] = useState([])
    const [productTypes, setProductTypes] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [nameAndPage, setNameAndPage] = useState({
        page: 0,
        name: "",
    });
    const showList = async () => {
        const result = await axios.get("http://localhost:8080/product")
        setProductList(result.data)
        setPageCount(result.totalPages)
    }
    const showProductList = async () => {
        const result = await axios.get("http://localhost:8080/product/productType")
        setProductTypes(result.data)
    }
    const handlePageClick = (event) => {
        setNameAndPage((prev) => ({...prev, page: event.selected}));
    };
    const getData = async (id) => {
        const data = await findProductById(id);
        setBookDetail(data);
    };
    const handleDeleteBook = async () => {
        await deleteProduct(bookDetail.id);
        alert("Xoá sản phẩm thành công");
    };
    useEffect(() => {
        showList()
        showProductList()

    }, [])
    return (
        <>
            <Formik initialValues={{nameProduct: ''}} onSubmit={(values => {
                const search = async () => {
                    const result = await searchProduct(values.nameProduct, values.productType)
                    console.log(result)
                    setProductList(result)
                };
                search()
            })}>
                <Form>
                    <div>
                        <label>Tên</label>
                        <Field id="nameProduct" name="nameProduct" type="text"/>
                    </div>


                    <button className="btn btn-primary" type="submit">Submit</button>
                </Form>
            </Formik>
            <Formik initialValues={{productType: ""}} onSubmit={(values => {
                const search = async () => {
                    const result = await searchProductType(values.productType)
                    console.log(result)
                };
                search()
            })}>
                <Form>
                    <div>
                        <label>Loại sản phẩm</label>
                        <Field name="productType" as="select">
                            {productTypes.map((pt, index) => (
                                <option key={index} id="productType" value={pt.id}>{pt.name}</option>
                            ))}
                        </Field>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </Form>
            </Formik>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Ngày nhập</th>
                    <th>Số lượng</th>
                    <th>Loại sản phẩm</th>
                    <th>Cập nhật</th>
                </tr>
                </thead>

                <tbody>
                {
                    productList.map((product, index) => (
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.nameProduct}</td>
                            <td>{product.date}</td>
                            <td>{product.amount}</td>
                            <td>{product.productType.name}</td>
                            <td><NavLink to={`/edit/${product.id}`} className="btn btn-primary">Cập nhật</NavLink></td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => getData(product.id)}
                                >
                                    Xoá
                                </button>
                            </td>
                        </tr>

                    ))
                }

                </tbody>
            </table>
            <div className="d-grid">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageCount={pageCount}
                    previousLabel="< "
                    containerClassName="pagination"
                    pageLinkClassName="page-num"
                    nextLinkClassName="page-next"
                    previousLinkClassName="page-previous"
                    activeClassName="active"
                    disabledClassName="d-none"
                />
            </div>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Delete
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            Bạn có muốn xoá{" "}
                            <span className={"text-danger"}>{bookDetail?.name}</span>?
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Huỷ
                            </button>
                            <button
                                data-bs-dismiss="modal"
                                type="button"
                                onClick={() => handleDeleteBook()}
                                className="btn btn-primary"
                            >
                                Xác nhận
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}