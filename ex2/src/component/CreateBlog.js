import React  from "react";
import { Field, Form, Formik} from 'formik';
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
            <Formik initialValues={{title:'',category:'',updatedAt: today , content:''}}
                    validationSchema={
                        Yup.object({
                            title:Yup.string().required(),
                            category:Yup.string().required(),
                            content:Yup.string().required()
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
                    <label>Category</label>
                    <Field type="text" id="category" name="category"/>
                    <label>Content</label>
                    <Field type="text" id="content" name = "content"/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </Formik>
        </>


    )
}
