const INITIAL_STATE = {
    isSignedIn: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
          isSignedIn: true
      };
    case "SIGN_OUT":
      return {
          isSignedIn: false
      };
    default:
      return state;
  }
};
