import actionsEnum from '../actions/actionsEnum'

const defaultContact = {
    name: {}
};
const defaultState = {
    contacts: [],
    contact: defaultContact
};
export default (state = {}, action) => {
    switch (action.type) {
        case actionsEnum.GET_ALL_CONTACTS:
            return {
                ...state,
                contacts: action.payload
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