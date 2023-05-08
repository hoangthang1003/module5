import React from "react";
import {Field, Form, Formik} from "formik";
import {blogService} from "../service/Service";
import {useNavigate} from "react-router";

export function AddBlog() {
    const navigate = useNavigate();
    return (
        <>
            <Formik initialValues={{title: '', slug: '', category: '', thumbnail_url: ''}} onSubmit={values => {
                const addBlog = async () => {
                    await blogService.createBlog({...values});
                    navigate("/")
                }
                addBlog()
            }
            }>
                <Form>
                    <div>
                        <lable>Title</lable>
                        <Field type="text" id="title" name="title"/>
                    </div>
                    <div>
                        <lable>Slug</lable>
                        <Field  type="text" id="slug" name="slug"/>
                    </div>
                    <div>
                        <lable>Category</lable>
                        <Field  type="text" id="category" name="category"/>
                    </div>
                    <div>
                        <lable>Thumbnail URl</lable>
                        <Field  type="text" id="thumbnail_url" name="thumbnail_url"/>
                    </div>
                    <button type="submit">Submit</button>


                </Form>
            </Formik>
        </>
    )
}