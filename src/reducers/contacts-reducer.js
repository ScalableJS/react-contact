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

export default (state = defaultState, action) => {
    return ({
        ...contacts,
        ...contact,
        ...deleteContact,
        ...saveContact
    }[action.type] || DEFAULT)(state, action);
}