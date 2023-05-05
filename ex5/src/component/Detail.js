import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {BlogService} from "../service/BlogService";

export function Detail() {
    const params = useParams();

    const [blog,setBlog] = useState("");
    const showAll = async () => {
        const result = await BlogService.findById(params.id)
        setBlog(result)
    }
    useEffect(() => {
        showAll();
    },[])
    return (
        <>
        <ul>
            <li> {blog?.title} </li>
            <li> {blog?.category} </li>
            <li> {blog?.updatedAt} </li>
            <li> {blog?.content} </li>
            <li> {blog?.author} </li>
            <li> {blog?.authorEmail} </li>
        </ul>
        </>
    )
}