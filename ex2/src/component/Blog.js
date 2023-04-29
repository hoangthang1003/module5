import React, {useEffect, useState} from "react";
import {BlogService} from "../service/BlogService";
import {Link} from "react-router-dom";
import BlogModalDelete from "./ModalDelete";


export function BlogList() {
    const [blogs, setBlog] = useState([]);
    const [idDelete, setIdDelete] = useState("");
    const [nameDelete, setNameDelete] = useState("");
    const handleDelete = (id, name) => {
        setIdDelete(id)
        setNameDelete(name)
    }
    const blogList = async () => {
        const result = await BlogService.blogList();
        setBlog(result)
    }
    useEffect(() => {
        blogList()
    }, [])
    return (
        <>

            <Link to={"addBlog"} className="btn btn-primary">Add Blog</Link>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Time</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {blogs.map((blog, index) =>
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{blog.title}</td>
                        <td>{blog.category}</td>
                        <td>{blog.updatedAt}</td>
                        <td>
                            <Link to={`/updateBlog/${blog.id}`} className="btn btn-primary">Update</Link>
                        </td>
                        <td>
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => handleDelete(blog.id, blog.title)}
                        >Delete
                        </button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            <BlogModalDelete
                id={idDelete}
                name={nameDelete}
                getList={() => {
                    blogList();
                }}
            />
        </>
    )
}