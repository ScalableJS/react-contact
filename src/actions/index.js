import actionEnum from './actionsEnum';

export function newContact() {
    return dispatch => {
        dispatch({
            type: actionEnum.NEW_CONTACT
        })
    }
}

export function updateContact(contact) {
    return dispatch => {
        fetch(`/api/contacts/${contact.id}`, {
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
