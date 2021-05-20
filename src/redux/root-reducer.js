import {combineReducers} from 'redux';
import signinReducer from './sign-in/sign-in.reducer';

const rootReducer = combineReducers({
    signin : signinReducer
})

export default rootReducer;