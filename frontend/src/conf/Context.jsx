import { useReducer } from "react";
import { context, initialState, globalReducer } from "./store";

export default function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(globalReducer, initialState);

    return (
        <context.Provider value={{ state, dispatch }}>
            {children}
        </context.Provider>
    );
}
