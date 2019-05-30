import {DELETE_CONTACT_PENDING, DELETE_CONTACT_SUCCESS, DELETE_CONTACT_ERROR} from '../actions/deleteContact';

export default {
    [DELETE_CONTACT_PENDING]: (state) => ({
        ...state,
        pending: true
    }),
    [DELETE_CONTACT_SUCCESS]: (state, action) => {
        const id = action.payload;
        const contacts = state.contacts.filter(item => item.id !== id)
        return {
            ...state,
            pending: false,
            contacts: contacts
        }
    },
    [DELETE_CONTACT_ERROR]: (state, action) => ({
        ...state,
        pending: false,
        error: action.error
    })
};