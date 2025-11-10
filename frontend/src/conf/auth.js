import { REFRESH_TOKEN_KEY, ACCESS_TOKEN_KEY } from './common.js';
import { axiosCall } from './axios.js'
// import { toast } from 'react-toastify'

// "api/token/refresh/"


function registerNewUser(username, password, password2, email) {
    const new_user = {
        username,
        password,
        password2,
        email
    }
    return axiosCall("api/users/register/", new_user, null, "POST")
}

async function loginUser(username, password){
    const credentials = {username, password};
    try{
        const res = await axiosCall("api/users/login/", credentials, null, "POST");
        localStorage.setItem(ACCESS_TOKEN_KEY, res.access);
        localStorage.setItem(REFRESH_TOKEN_KEY, res.refresh);
        localStorage.setItem("username", res.username);
        localStorage.setItem("is_admin", res.is_admin);
        return res
    } catch (e){
        console.error("Login failed: ", e);
        throw e
    }
}


function logoutEntirely() {
    // toast.success('Logged out successfully', { toastId: 999 })
    localStorage.clear()
    axiosCall("api/users/logout/", null, null, "POST")
}       

async function accessTokenIsValid() {
    try {
        const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
        // await axiosCall("api/token/verify/", {token: accessToken}, null, "POST");
        let response = await axiosCall(
            "api/token/verify/",
            { token: accessToken },
            null, "POST"
        )
        console.log(response)
        return true
    } catch (e) {
        console.error("Invalid access token detected: ", e)
        return false
    }
}

async function refreshTokenLS() {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
    if (!refreshToken) return false;
    try{
        const res = await axiosCall("api/token/refresh/", {token: refreshToken}, null, "POST");
        localStorage.setItem(ACCESS_TOKEN_KEY, res.access);
            return true;
    } catch(e){
        console.error("Failed to refresh token: ", e);
        localStorage.clear();
        return false;
    }
}


export {
    registerNewUser,
    loginUser,
    accessTokenIsValid,
    refreshTokenLS,
    logoutEntirely
}