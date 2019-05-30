import {SAVE_CONTACT_ERROR, SAVE_CONTACT_PENDING, SAVE_CONTACT_SUCCESS} from "../actions/saveContact";

export default {
    [SAVE_CONTACT_PENDING]: (state) => ({
        ...state,
        pending: true
    }),
    [SAVE_CONTACT_SUCCESS]: (state, action) => ({
        ...state,
        pending: false,
        contacts: [...state.contacts, action.payload]
    }),
    [SAVE_CONTACT_ERROR]: (state, action) => ({
        ...state,
        pending: false,
        error: action.error
    })
};