import React  from "react";
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {BlogService} from "../service/BlogService";
import {useNavigate} from "react-router";
import slugify from "slugify";
import * as Yup from 'yup';



export function CreateBlog() {
    const navigate = useNavigate();
    const date = new Date()
    const today = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
    return (
        <>
            <Formik initialValues={{title:'',category:'',updatedAt: today,author:'',authorEmail:'' , content:''}}
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
                        const slug = slugify(values.title, {lower:true, strict: true})
                        const addBlog = async () => {
                            await BlogService.createBlog({...values,slug})
                            navigate("/")
                        };
                        addBlog()
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
