import axios from "axios";
const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
    timeout: 1000,
});

export default function getAxiosInstance(){
    return instance;
}


export function setAxiosInstanceWithToken(token){
    instance.defaults.headers.post['Authorization'] = `Bearer ${token}`
    instance.defaults.headers.delete['Authorization'] = `Bearer ${token}`
    instance.defaults.headers.patch['Authorization'] = `Bearer ${token}`


}


