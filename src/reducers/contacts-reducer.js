import actionsEnum from '../actions/actionsEnum'
export default function (state = {}, action) {
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
        default:
            return state;
    }
}