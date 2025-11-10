import { axiosCall } from "./axios.js";
// import { BASE_URL } from "./store.js";

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

function isLoggedIn() {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY)
    return token !== null
}

async function getFood() {
    // const response = await axiosCall(`${BASE_URL}/api/foods`)
    const response = await axiosCall(`/api/foods`)
    console.log(response);
    return response
}

async function deleteFood(id) {
    // if (!id){
    //     console.error("deleteFood: id is missing!")
    //     return;
    // }
    const response = await axiosCall(`/api/foods/${id}/`, null, null, "DELETE")
    console.log(response);
    return response
}

async function addToWishlist(food_id) {
    return await axiosCall('api/foods/wishlist/', { food_id }, null, 'POST')
}

async function getWishlist(food_id) {
    return await axiosCall('api/foods/wishlist', null, null, 'GET')
}

async function deleteFromWishlist(food_id) {
    return await axiosCall('api/foods/wishlist/', { food_id, delete_food: true }, null, 'POST')
}

export {
    isLoggedIn,
    getFood,
    deleteFood,
    addToWishlist,
    getWishlist,
    deleteFromWishlist,

    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY
}