import contact from '../DummyData/dummy-users'
export const getAllContacts = () => {
    return {
        type: 'GET_ALL_CONTACTS',
        payload: contact
    }
};