import actionEnum from './actionsEnum';
import fetch from '../dummy/fetch';


export const getAllContacts = () => {
    return dispatch => {
        return fetch('/api/contacts', {
            type: actionEnum.GET_ALL_CONTACTS,
        }).then((contacts) => {
            dispatch({
                type: actionEnum.GET_ALL_CONTACTS,
                payload: contacts
            });
        })
    }
};

export function getContact(_id) {
    return dispatch => {
        return fetch(`/api/contacts/${_id}`, {
            type: actionEnum.GET_CONTACT
        })
            .then((contact) => {
            dispatch({
                type: actionEnum.GET_CONTACT,
                payload: contact
            })
        })
            .catch((contact) => {
                dispatch({
                    type: actionEnum.GET_CONTACT,
                    payload: null
                })
            })
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