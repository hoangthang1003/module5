import axios from "axios";

export const facilityList = async () => {
    const result = await axios.get(`http://localhost:7000/facility`)
    return result.data
}
export const addFacility = async (value) => {
    await axios.post(`http://localhost:7000/facility`,{...value})
}

export const facilityService = [
    facilityList(),
    addFacility()
]