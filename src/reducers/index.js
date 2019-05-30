import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';


import contact from './contact';
import contacts from './contacts';
import deleteContact from './deleteContact';
import saveContact from './saveContact';

const defaultContact = {
    name: {},
    callHistory: []
};
const defaultState = {
    contacts: [],
    contact: defaultContact,
    pending: false
};

const DEFAULT = (state) => state;

const ContactsReducer = (state = defaultState, action) => {
    return ({
        ...contacts,
        ...contact,
        ...deleteContact,
        ...saveContact
    }[action.type] || DEFAULT)(state, action);
};


const allReducers = combineReducers({
    contactStore: ContactsReducer,
    form: formReducer
});


export default allReducers;