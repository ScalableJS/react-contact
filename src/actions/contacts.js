export const FETCH_CONTACTS_PENDING = 'FETCH_CONTACTS_PENDING';
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR';
const baseURL =  'http://localhost:3030';
export function fetchContactsPending() {
    return {
        type: FETCH_CONTACTS_PENDING
    }
}

export function fetchContactsSuccess(contacts) {
    return {
        type: FETCH_CONTACTS_SUCCESS,
        contacts: contacts
    }
}

export function fetchContactsError(error) {
    return {
        type: FETCH_CONTACTS_ERROR,
        error: error
    }
}

export const fetchContacts = () => {
    return dispatch => {
        dispatch(fetchContactsPending());
        fetch(`${baseURL}/contacts`)
            .then(res => res.json())
            .then(res => {
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
