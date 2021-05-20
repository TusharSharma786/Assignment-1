import SigninActionTypes from './sign-in.types';

const INITIAL_STATE = {
  signIn: false,
};

const signinReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SigninActionTypes.TOGGLE_SIGNIN:
      return {
        ...state,
        signIn: !state.signIn
      };
      default:
      return state;
  }
};

export default signinReducer;