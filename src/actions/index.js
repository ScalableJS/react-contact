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

export function newContact() {
    return dispatch => {
        dispatch({
            type: 'NEW_CONTACT'
        })
    }
}

export function saveContact(contact) {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: actionEnum.SAVE_CONTACT,
                payload: contact
                // payload: client.post("/api/contacts", contact)
            });
        }, 1000);
    }

}

export function updateContact(contact) {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: actionEnum.UPDATE_CONTACT,
                payload: contact// contacts.find((item)=>item._id === _id)

            });
        }, 1000);
    }


}
export function deleteContact(_id) {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: actionEnum.DELETE_CONTACT,
                payload: contacts.find((item)=>item._id === _id)
            });
        }, 1000);
    }
}