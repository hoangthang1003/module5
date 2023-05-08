import axios from "axios";

const findAll = async () => {
    const result = await axios.get(`https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts`)
    return result.data
}
const createBlog = async (value) => {
    return await axios.post(`https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts`,{...value})

}

export const blogService = {
    findAll,
    createBlog
}