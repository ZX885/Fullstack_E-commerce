import { createContext } from "react";

const BASE_URL = "http://127.0.0.1:8000/"

const context = createContext(null);

const initialState = {
    isAuth: false,
    isAdmin: false,
    wishlist: [],
}

function globalReducer(state, action) {
    switch (action.type) {
        case "Auth":
            return { ...state, isAuth: true }
        case "NotAuth":
            return { ...state, isAuth: false }
        case "SetAdmin":
            return { ...state, isAdmin: true }
        case "NotAdmin":
            return { ...state, isAdmin: false }
        case "setWishlist":
            return { ...state, wishlist: action.payload }
        default:
            // throw new Error("Unexpected action")
            return state;
    }
}

export {
    context,
    initialState,
    globalReducer,
    BASE_URL,
};