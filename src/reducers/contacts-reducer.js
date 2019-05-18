import actionsEnum from '../actions/actionsEnum'
export default function (state = null, action) {
    switch (action.type) {
        case actionsEnum.GET_ALL_CONTACTS:
            return action.payload;
        default:
            return state;
    }
}