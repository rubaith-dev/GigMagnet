import {ACTIONS} from "./actions";

export const initialState = {
  showLoginModal: false,
  showSignupModal: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_LOGIN_MODAL:
      return {
        ...state,
        showLoginModal: action.showLoginModal,
      };
    case ACTIONS.TOGGLE_SIGNUP_MODAL:
      return {
        ...state,
        showSignupModal: action.showSignupModal,
      };

    default:
      return state;
  }
};


