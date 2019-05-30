import {FETCH_CONTACT_PENDING, FETCH_CONTACT_SUCCESS, FETCH_CONTACT_ERROR} from '../actions/contact';

export default {
    [FETCH_CONTACT_PENDING]: (state) => ({
        ...state,
        pending: true
    }),
    [FETCH_CONTACT_SUCCESS]: (state, action) => ({
        ...state,
        pending: false,
        contact: action.contact
    }),
    [FETCH_CONTACT_ERROR]: (state, action) => ({
        ...state,
        pending: false,
        error: action.error
    })
};