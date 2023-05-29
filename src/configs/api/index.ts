import axios from "axios";

export const api = axios.create({
    baseURL: 'https://json-server-render-u1g4.onrender.com/'
});