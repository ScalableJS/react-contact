import contacts from '../DummyData/dummy-users'
import actionEnum from './actionsEnum';

export const getAllContacts = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: actionEnum.GET_ALL_CONTACTS,
                payload: contacts
            });
        }, 1000);
    }
};

export function getContact(_id) {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: actionEnum.GET_CONTACT,
                payload: contacts.find((item)=>item._id === _id)

            });
        }, 1000);
    }
}