import actionEnum from './actionsEnum';
import {fetchContactsPending, fetchContactsSuccess, fetchContactsError} from './fetchContacts'

const baseURL =  'http://localhost:3030';
const headers = {'Content-Type': 'application/json'}


export const fetchContacts = () => {

    return dispatch => {

        dispatch(fetchContactsPending());
        fetch(`${baseURL}/contacts`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if(res.error) {
                    throw(res.error);
                }

                dispatch(fetchContactsSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(fetchContactsError(error));
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