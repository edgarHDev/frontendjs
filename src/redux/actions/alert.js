
import { SHOW_ALERT, HIDE_ALERT } from "./types";

export const showAlert = (title, message, type) => async dispatch => {
    dispatch({
        type : SHOW_ALERT,
        payload : {message : message, title : title, type : type}
    });
        
}

export const hideAlert = () => async dispatch => {
    dispatch({
        type : HIDE_ALERT,
    });
        
}