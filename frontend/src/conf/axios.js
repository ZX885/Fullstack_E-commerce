import axios from 'axios';
import { BASE_URL } from './store.js'
import { ACCESS_TOKEN_KEY } from './common.js';

async function axiosCall(path, data = null, headersData = null, method = "GET") {
    try {
        const url = BASE_URL + path
        const token = localStorage.getItem(ACCESS_TOKEN_KEY)
        const headers = {
            'Content-Type': 'application/json',
            ...headersData
        }

        // if(token){
        //     headers["Authorization"] = `Bearer ${token}`;
        // }

        const response = await axios({
            method,
            url,
            data,
            headers,
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error('Error in AxiosCall');
        console.error(error.message);
        return error
    }
}

export {
    axiosCall
}