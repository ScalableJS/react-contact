import {FETCH_CONTACTS_PENDING, FETCH_CONTACTS_SUCCESS, FETCH_CONTACTS_ERROR} from '../actions/contacts';

export default {
    [FETCH_CONTACTS_PENDING]: (state) => ({
        ...state,
        pending: true
    }),
    [FETCH_CONTACTS_SUCCESS]: (state, action) => {
        return {
            ...state,
            pending: false,
            contacts: action.contacts,
            count: action.count
        }
    },
    [FETCH_CONTACTS_ERROR]: (state, action) => ({
        ...state,
        pending: false,
        error: action.error
    })
};