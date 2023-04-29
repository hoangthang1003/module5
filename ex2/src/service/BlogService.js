import axios from "axios";


 const blogList = async () => {
    const result = await axios.get(`http://localhost:7000/posts`)
    return result.data;
}
const findById = async (id) => {
    const result = await axios.get(`http://localhost:7000/posts/${id}`)
    return result.data;
}
 const createBlog = async (value) => {
    await axios.post(`http://localhost:7000/posts`, {...value})
    console.log(value)
}
 const deleteBlog = async (id) => {
    await axios.delete(`http://localhost:7000/posts/${id}`)

}
 const updateBlog = async (id,value) => {
    await axios.put(`http://localhost:7000/posts/${id}`,{...value})

}

export const BlogService = {
    blogList,
    createBlog,
    deleteBlog,
    updateBlog,
    findById

}