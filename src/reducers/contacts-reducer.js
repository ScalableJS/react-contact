import actionsEnum from '../actions/actionsEnum';
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

const DEFAULT = () => defaultState;
export default (state = defaultState, action) => {

    return ({
        ...contacts,
        ...contact,
        ...deleteContact,
        ...saveContact
    }[action.type] || DEFAULT)(state, action);

    switch (action.type) {

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