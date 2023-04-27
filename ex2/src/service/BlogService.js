import axios from "axios";


export const blogList = async () => {
    const result = await axios.get(`http://localhost:7000/posts`)
    return result.data;
}
export const createBlog = async (value) => {
    await axios.post(`http://localhost:7000/posts`, {...value})
    console.log(value)
}
export const deleteBlog = async (id) => {
    await axios.delete(`http://localhost:7000/posts/${id}`)

}

export const BlogService = {
    blogList,
    createBlog,
    deleteBlog
}