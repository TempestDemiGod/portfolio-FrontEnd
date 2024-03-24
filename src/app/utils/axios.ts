import axios from "axios";
const URI_BACKEND = 'https://portfolioback.glitch.me/api/v1'

// 'http://localhost:3000/api/v1'



const instance = axios.create({
    baseURL: URI_BACKEND,
    withCredentials: true,
})

export default instance