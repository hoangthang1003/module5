import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get(`http://localhost:7000/facilitiesList`);
        return result.data;
    } catch (arr) {
        console.log(arr)
    }
}

export const remove = async (id) => {
    try {
        await axios.delete(`http://localhost:7000/facilitiesList/${id}`)
    } catch (error) {
        return error
    }
}

export const create = async (values)=>{
    try {
        await axios.post('http://localhost:7000/facilitiesList', {...values})
    }catch (e){
        console.log(e)
    }
}

export const update = async (id, values) => {
    try {
        await axios.patch(`http://localhost:7000/facilitiesList/${id}`, {...values})
    } catch (e) {
        console.log(e)
    }
}

export const findById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:7000/facilitiesList/${id}`);
        return result.data;
    } catch (arr) {
        console.log(arr)
    }
}
export const facilityService = {
    findAll,
    findById,
    remove,
    update,
    create

}
