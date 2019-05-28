import actionEnum from './actionsEnum';

export function newContact() {
    return dispatch => {
        dispatch({
            type: actionEnum.NEW_CONTACT
        })
    }
}

export function saveContact(contact) {
    return dispatch => {
        return fetch('/api/contacts', {
            contact: contact,
            type: actionEnum.SAVE_CONTACT
        }).then((contacts) => {
            dispatch({
                type: actionEnum.SAVE_CONTACT,
                payload: contacts
            })
        });
    }

}

export function updateContact(contact) {
    return dispatch => {
        return fetch(`/api/contacts/${contact._id}`, {
            contact: contact,
            type: actionEnum.UPDATE_CONTACT
        }).then((contacts) => {
            dispatch({
                type: actionEnum.UPDATE_CONTACT,
                payload: contacts
            })
        })
    }
}

export function deleteContact(_id) {
    return dispatch => {
        return fetch(`/api/contacts/${_id}`, {
            type: actionEnum.DELETE_CONTACT
        }).then(() => {
            dispatch({
                type: actionEnum.DELETE_CONTACT,
                payload: _id
            });
        })
    }
}