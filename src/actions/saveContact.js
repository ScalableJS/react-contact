export const SAVE_CONTACT_PENDING = 'SAVE_CONTACT_PENDING';
export const SAVE_CONTACT_SUCCESS = 'SAVE_CONTACT_SUCCESS';
export const SAVE_CONTACT_ERROR = 'SAVE_CONTACT_ERROR';
const baseURL = 'http://localhost:3030';

export function saveContactPending() {
    return {
        type: SAVE_CONTACT_PENDING
    }
}

export function saveContactSuccess(contact) {
    return {
        type: SAVE_CONTACT_SUCCESS,
        payload: contact
    }
}

export function saveContactError(error) {
    return {
        type: SAVE_CONTACT_ERROR,
        error: error
    }
}

export const saveContact = (contact) => {
    return dispatch => {
        dispatch(saveContactPending());

        return fetch(`${baseURL}/contacts`, {
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(contact),
            method: 'POST'
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw(res.error);
                }

                dispatch(saveContactSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(saveContactError(error));
            })

    }
};
