import {BlogService} from "../service/BlogService";

export default function BlogModalDelete(props) {
    const handleDelete = async (id) => {
        await BlogService.deleteBlog(id)
        props.getList()
    }
    return (
        <>
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
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Delete Customer
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">Are you sure to delete customer<span className="text-danger fw-bold">{props.name}</span>?</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button onClick={() => handleDelete(props.id)} type="button" className="btn btn-primary" data-bs-dismiss="modal">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}