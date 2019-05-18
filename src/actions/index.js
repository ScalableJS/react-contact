import contact from '../DummyData/dummy-users'

export const getAllContacts = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'GET_ALL_CONTACTS',
                payload: contact
            });
        }, 1000);
    }
};
