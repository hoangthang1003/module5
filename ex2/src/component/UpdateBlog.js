import {useNavigate, useParams} from "react-router";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import slugify from "slugify";
import {BlogService} from "../service/BlogService";
import React, {useEffect, useState} from "react";

export function UpdateBlog() {
    const navigate = useNavigate();
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
                content: blog?.content
            }}
                    validationSchema={
                        Yup.object({
                            title: Yup.string().required(),
                            category: Yup.string().required(),
                            content: Yup.string().required()
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


                    <div>
                        <label>Title</label>
                        <Field type="text" id="title" name="title"/>
                    </div>
                    <div>
                        <label>Category</label>
                        <Field type="text" id="category" name="category"/>
                    </div>
                    <div>
                        <label>Content</label>

                        <Field type="text" id="content" name="content"/></div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </Formik>
        </>
    )
}