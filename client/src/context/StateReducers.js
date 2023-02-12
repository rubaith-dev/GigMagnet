import ACTIONS from "./actions";

export const initialState = {
  showLoginModal: false,
  showSignupModal: false,
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.TOGGLE_LOGIN_MODAL:
      return {
        ...state,
        showLoginModal: payload,
      };
    case ACTIONS.TOGGLE_SIGNUP_MODAL:
      console.log(payload)
      return {
        ...state,
        showSignupModal: payload,
      };
    default:
      return state;
  }
};
