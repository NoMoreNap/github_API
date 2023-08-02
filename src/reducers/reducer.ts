import { createSlice } from '@reduxjs/toolkit'


const initState = {
    "total_count": -1,
    "incomplete_results": false,
    "items": []
}

export const data = createSlice({
    name: 'usersData',
    initialState: initState,
    reducers: {
        addUsers(state, action) {
            return {
                ...state,
                ...action.payload
            }
        }
    }
})
export const { addUsers } = data.actions