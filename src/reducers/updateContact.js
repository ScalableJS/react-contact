import {UPDATE_CONTACT_ERROR, UPDATE_CONTACT_PENDING, UPDATE_CONTACT_SUCCESS} from "../actions/saveContact";

export default {
    [UPDATE_CONTACT_PENDING]: (state) => ({
        ...state,
        pending: true
    }),
    [UPDATE_CONTACT_SUCCESS]: (state, action) => {
        return {
            ...state,
            pending: false,
            contacts: [...state.contacts, action.payload]
        }
    },
    [UPDATE_CONTACT_ERROR]: (state, action) => ({
        ...state,
        pending: false,
        error: action.error
    })
};