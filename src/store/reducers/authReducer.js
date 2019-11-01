import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  userId: null,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTHORIZATION_START:
      return { ...state, loading: true };
    case actionTypes.AUTHORIZATION_SUCCESS:
      return { userId: action.userId, loading: false, error: null };
    case actionTypes.AUTHORIZATION_FAIL:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default authReducer;
