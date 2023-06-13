import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";

// Load the persisted state from localStorage
const persistedState = localStorage.getItem("reduxState")
    ? JSON.parse(localStorage.getItem("reduxState"))
    : {};

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    preloadedState: {
        auth: persistedState.auth,
    }
});

// Save the state to localStorage whenever it changes
store.subscribe(() => {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;