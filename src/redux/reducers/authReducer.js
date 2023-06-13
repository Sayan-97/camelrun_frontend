import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isConnected: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        connect (state) {
            state.isConnected = true;
        },
        disconnect (state) {
            state.isConnected = false;
        },
    },
});

export const { connect, disconnect } = authSlice.actions;
export default authSlice.reducer;