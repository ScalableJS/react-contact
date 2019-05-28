import actionsEnum from '../actions/actionsEnum';
import {FETCH_CONTACTS_PENDING, FETCH_CONTACTS_SUCCESS, FETCH_CONTACTS_ERROR} from '../actions/fetchContacts';

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


        case actionsEnum.GET_CONTACT:
            return {
                ...state,
                contact: action.payload
            };
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
        case actionsEnum.DELETE_CONTACT:
            const _id = action.payload;

            return {
                ...state,
                contacts: state.contacts.filter(item => item._id !== _id)
            };
        default:
            return state;
    }
}