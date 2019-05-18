import {combineReducers} from 'redux';
import ContactsReducer from './contacts-reducer';

const allReducers = combineReducers({
    contacts: ContactsReducer
});


export default allReducers;