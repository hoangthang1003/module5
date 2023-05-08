import React, {useEffect, useState} from "react";
import {blogService} from "../service/Service";
import {Link} from "react-router-dom";

export function BlogList() {
    const [blogs,setBlog] = useState([])
    const blogList = async () => {
        const res = blogService.findAll()
        setBlog(await res)
    }
    useEffect(() => {
        blogList()
    },[])
    return(
        <>
            <Link to="/addBlog" className="btn btn-primary">Add Blog</Link>
        <table className="table table-striped">
            <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Slug</th>
                <th>Category</th>
                <th>Thumbnail URL</th>
            </tr>
            </thead>
            <tbody>
            { blogs.map((blog, index) => (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{blog.title}</td>
                    <td>{blog.slug}</td>
                    <td>{blog.category}</td>
                    <td>{blog.thumbnail_url}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </>
    )
}