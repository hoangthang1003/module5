import axios from "axios";

const findAll = async () => {
    try {
        const result = await axios.get(`http://localhost:7000/customers`)
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
const findById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:7000/customers/${id}`)
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
const customerTypeList = async () => {
    try {
        const result = await axios.get(`http://localhost:7000/customerTypes`)
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
const deleteCustomer = async  (id) => {
    try {
        return await axios.delete(`http://localhost:7000/customers/${id}`)
    } catch (e) {
        console.log(e)
    }

}
const addCustomer = async (values) => {
    try {
        const res = axios.post(`http://localhost:7000/customers`,{...values})
        alert("Tạo thành công")
        return (await res).data;
    } catch (e) {
        console.log(e)
    }
}

export const customerService = {
    findAll,
    findById,
    deleteCustomer,
    addCustomer,
    customerTypeList
}