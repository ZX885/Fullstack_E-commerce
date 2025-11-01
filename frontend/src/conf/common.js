import {axiosCall} from "./axios.js";
// import { BASE_URL } from "./store.js";

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

function isLoggedIn(){
    const token = localStorage.getItem(ACCESS_TOKEN_KEY)
    return token !== null
}

async function getFood(){
    // const response = await axiosCall(`${BASE_URL}/api/foods`)
    const response = await axiosCall(`/api/foods`)
    console.log(response);
    return response
}
async function deleteFood(id){
    const response = await axiosCall(`/api/foods/${id}/`,null,null,"DELETE")
    console.log(response);
    return response
}

export {
    isLoggedIn,
    getFood,
    deleteFood,
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY
}