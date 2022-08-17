import * as ActionType from "../Actiontype";  

export const AuthSignup = (value) => (dispatch) => {

    dispatch({type:ActionType.AUTH_SIGN_UP, payload: value});

} 