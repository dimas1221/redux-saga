import axios from "axios";

let token =localStorage.getItem('token')
export default axios.create({
    baseURL: 'http://localhost:3003',
    headers:{
        "Content-type": "application/json",
        "Authrization":token
    }
})