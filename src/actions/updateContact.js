export const UPDATE_CONTACT_PENDING = 'UPDATE_CONTACT_PENDING';
export const UPDATE_CONTACT_SUCCESS = 'UPDATE_CONTACT_SUCCESS';
export const UPDATE_CONTACT_ERROR = 'UPDATE_CONTACT_ERROR';
const baseURL = 'http://localhost:3030';

export function updateContactPending() {
    return {
        type: UPDATE_CONTACT_PENDING
    }
}

export function updateContactSuccess(contacts) {
    return {
        type: UPDATE_CONTACT_SUCCESS,
        payload: contacts
    }
}

export function updateContactError(error) {
    return {
        type: UPDATE_CONTACT_ERROR,
        error: error
    }
}

export const updateContact = (contact) => {
    return dispatch => {
        dispatch(updateContactPending());

        return fetch(`${baseURL}/contacts/${contact.id}`, {
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(contact),
            method: 'PUT'
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw(res.error);
                }

                dispatch(updateContactSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(updateContactError(error));
            })

    }
};
