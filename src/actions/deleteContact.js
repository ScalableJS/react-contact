import actionEnum from "./actionsEnum";

export const DELETE_CONTACT_PENDING = 'DELETE_CONTACT_PENDING';
export const DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS';
export const DELETE_CONTACT_ERROR = 'DELETE_CONTACT_ERROR';
const baseURL = 'http://localhost:3030';

export function deleteContactPending() {
    return {
        type: DELETE_CONTACT_PENDING
    }
}

export function deleteContactSuccess(id) {
    return {
        type: DELETE_CONTACT_SUCCESS,
        payload: id
    }
}

export function deleteContactError(error) {
    return {
        type: DELETE_CONTACT_ERROR,
        error: error
    }
}

export const deleteContact = (id) => {
    return dispatch => {
        dispatch(deleteContactPending());
        fetch(`${baseURL}/contacts/${id}`, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw(res.error);
                }
                dispatch(deleteContactSuccess(id));
                return res;
            })
            .catch(error => {
                dispatch(deleteContactError(error));
            })

    }
};