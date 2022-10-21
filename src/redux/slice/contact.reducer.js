import {createSlice} from "@reduxjs/toolkit";

//name initialState fix you can not change it
const initialState = [
    {id: 1, name: 'soheil', number: '0919', country: 'iran', todo: [{id: 1, title: 'buy ticket', status: false}]},
    {id: 2, name: 'sobhan', number: '0912', country: 'spain', todo: [{id: 1, title: 'buy milk', status: false}]},
]

export const ContactSlice = createSlice({
    //name is product name
    name: 'contacts',
    //initialState
    initialState,
    //reducers are actions in my product
    reducers: {
        deleteContact: (state, action) => {
            //action => {payload:pass arg}
            const {payload} = action
            const index = state.findIndex(state => state.id === payload)
            state.splice(index, 1)
        },
        addContact: (state, action) => {
            //action => {payload:object}
            const {payload} = action
            state.push(payload)
        }
    }
})

export const {deleteContact, addContact} = ContactSlice.actions

//always you must export default slice.reducer
export default ContactSlice.reducer


