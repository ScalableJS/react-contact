import {combineReducers} from 'redux';
import ContactsReducer from './contacts-reducer';
import { reducer as formReducer } from 'redux-form';

const allReducers = combineReducers({
    contactStore: ContactsReducer,
    form: formReducer
});


export default allReducers;