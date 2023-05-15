import axios from "axios";

const findAll = async () => {
    try {
        const result = await axios.get(`http://localhost:7000/customer`)
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
const findById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:7000/customer/${id}`)
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
const customerTypeList = async () => {
    try {
        const result = await axios.get(`http://localhost:7000/customerType`)
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
const searchCustomer = async (name,customerType) => {
    try {
        const result = await axios.get(`http://localhost:7000/customer?name_like=${name}&customerType=${customerType}`)
        console.log(result)
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
const deleteCustomer = async  (id) => {
    try {
        return await axios.delete(`http://localhost:7000/customer/${id}`)
    } catch (e) {
        console.log(e)
    }

}
const addCustomer = async (values) => {
    try {
        const res = axios.post(`http://localhost:7000/customer`,{...values})
        alert("Tạo thành công")
        return (await res).data;
    } catch (e) {
        console.log(e)
    }
}
const editCustomer = async (values) => {
    try {
        const res = axios.put(`http://localhost:7000/customer/${values.id}`,{...values})
        alert("Sửa thành công")
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
    customerTypeList,
    editCustomer,
    searchCustomer
}