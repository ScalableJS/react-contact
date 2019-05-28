export const FETCH_CONTACT_PENDING = 'FETCH_CONTACT_PENDING';
export const FETCH_CONTACT_SUCCESS = 'FETCH_CONTACT_SUCCESS';
export const FETCH_CONTACT_ERROR = 'FETCH_CONTACT_ERROR';
const baseURL =  'http://localhost:3030';
export function fetchContactPending() {
    return {
        type: FETCH_CONTACT_PENDING
    }
}

export function fetchContactSuccess(contact) {
    return {
        type: FETCH_CONTACT_SUCCESS,
        contact: contact
    }
}

export function fetchContactError(error) {
    return {
        type: FETCH_CONTACT_ERROR,
        error: error
    }
}

export const fetchContact = (_id) => {
    return dispatch => {
        dispatch(fetchContactPending());
        fetch(`${baseURL}/contacts?_id=${_id}`)
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(fetchContactSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(fetchContactError(error));
            })

    }
};
