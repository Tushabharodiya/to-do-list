import axios from "axios"
import { BASE_URL } from "../constnt";



let getData = async (endpoint) => {
    let res = await axios.get(BASE_URL + endpoint)
    return res;
}


let addData = async (endpoint, data) => {
    let res = await axios.post(BASE_URL + endpoint, data)
    return res;
}

export { getData, addData }