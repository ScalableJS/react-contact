import {combineReducers} from 'redux';
import ContactsReducer from './contacts-reducer';

const allReducers = combineReducers({
    contactStore: ContactsReducer
});


export default allReducers;