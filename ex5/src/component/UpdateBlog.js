import {useNavigate, useParams} from "react-router";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import slugify from "slugify";
import {BlogService} from "../service/BlogService";
import React, {useEffect, useState} from "react";

export function UpdateBlog() {
    const navigate = useNavigate()
    const params = useParams()
    const [blog, setBlog] = useState(null);
    const findById = async () => {
        const result = await BlogService.findById(params.id)
        setBlog(result)
    }
    useEffect(() => {
        findById()
    },[params.id])
    if (!blog){
        return null;
    }
    return (
        <>
            <Formik initialValues={{
                title: blog?.title,
                category: blog?.category,
                updatedAt: blog?.updatedAt,
                content: blog?.content,
                author: blog?.author,
                authorEmail: blog?.authorEmail,
            }}
                    validationSchema={
                        Yup.object({
                            title:Yup.string().required("Nhập tựa đề"),
                            category:Yup.string().required("Nhập thể loại"),
                            content:Yup.string().required("Nhập nội dung"),
                            author:Yup.string().required("NHập tên tác giả"),
                            authorEmail:Yup.string().required("Nhập địa chỉ Email tác giả").matches("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),

                        })
                    }
                    onSubmit={(values => {
                        const slug = slugify(values.title, {lower: true, strict: true})
                        const updateBlog = async () => {
                            await BlogService.updateBlog(blog?.id,{...values, slug})
                            navigate("/")
                        };
                        updateBlog()
                        console.log(values)
                    })}>
                <Form>
                    <label>Title</label>
                    <Field type="text" id="title"  name="title"/>
                    <ErrorMessage name="title"/>
                    <label>Category</label>
                    <Field type="text" id="category" name="category"/>
                    <ErrorMessage name="category"/>
                    <label>Content</label>
                    <Field type="text" id="content" name = "content"/>
                    <ErrorMessage name="content"/>
                    <label>Author</label>
                    <Field type="text" id="author" name = "author"/>
                    <ErrorMessage name="author"/>
                    <label>Author Email</label>
                    <Field type="text" id="authorEmail" name = "authorEmail"/>
                    <ErrorMessage name="authorEmail"/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </Formik>
        </>
    )
}