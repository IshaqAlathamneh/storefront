import {createSlice} from '@reduxjs/toolkit';
// createSlice
const detailsSlice = createSlice({
    name: 'details',
    initialState: {},
    reducers: {
        saveProd(state, action) {
            state = action.payload
        }
    }
});

// console.log("peopleSlice ====> ", peopleSlice)
export const {saveProd} = detailsSlice.actions;
export default detailsSlice.reducer;