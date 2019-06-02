export const FETCH_CONTACTS_PENDING = 'FETCH_CONTACTS_PENDING';
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR';
const baseURL = 'http://localhost:3030';

export function fetchContactsPending() {
    return {
        type: FETCH_CONTACTS_PENDING
    }
}

export function fetchContactsSuccess(data) {
    return {
        type: FETCH_CONTACTS_SUCCESS,
        contacts: data.json,
        count: data.count
    }
}

export function fetchContactsError(error) {
    return {
        type: FETCH_CONTACTS_ERROR,
        error: error
    }
}

export const fetchContacts = (page, limit) => {
    return dispatch => {
        dispatch(fetchContactsPending());
        fetch(`${baseURL}/contacts?_page=${page}&_limit=${limit}`)
            .then(res => {
                const count = res.headers.get('X-Total-Count');
                return res.json().then(json=>({
                    count,
                    json
                }));
            })
            .then((res, a) => {
                if (res.error) {
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
