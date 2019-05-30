import actionsEnum from '../actions/actionsEnum';
import {FETCH_CONTACTS_PENDING, FETCH_CONTACTS_SUCCESS, FETCH_CONTACTS_ERROR} from '../actions/contacts';
import {FETCH_CONTACT_PENDING, FETCH_CONTACT_SUCCESS, FETCH_CONTACT_ERROR} from '../actions/contact';
import {DELETE_CONTACT_PENDING, DELETE_CONTACT_SUCCESS, DELETE_CONTACT_ERROR} from '../actions/deleteContact';

const defaultContact = {
    name: {},
    callHistory: []
};
const defaultState = {
    contacts: [],
    contact: defaultContact,
    loading: false
};
export default (state = defaultState, action) => {
    switch (action.type) {
        // FETCH_CONTACTS
        case FETCH_CONTACTS_PENDING:
            return {
                ...state,
                pending: true
            };
        case FETCH_CONTACTS_SUCCESS:
            return {
                ...state,
                pending: false,
                contacts: action.contacts
            };
        case FETCH_CONTACTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            };
        // FETCH ONE CONTACT
        case FETCH_CONTACT_PENDING:
            return {
                ...state,
                pending: true
            };
        case FETCH_CONTACT_SUCCESS:
            return {
                ...state,
                pending: false,
                contact: action.contact
            };
        case FETCH_CONTACT_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            };

        // DELETE ONE CONTACT
        case DELETE_CONTACT_PENDING:
            return {
                ...state,
                pending: true
            };
        case DELETE_CONTACT_SUCCESS:
            const id = action.payload;
            return {
                ...state,
                pending: false,
                contacts: state.contacts.filter(item => item.id !== id)
            };
        case DELETE_CONTACT_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            };

        // -------------


        case actionsEnum.NEW_CONTACT:
            return {
                ...state,
                contact: defaultContact
            };
        case actionsEnum.UPDATE_CONTACT:
            return {
                ...state,
                contacts: action.payload,
            };

        default:
            return state;
    }
}