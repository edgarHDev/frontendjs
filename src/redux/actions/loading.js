
import { LOADING_CLOSE, LOADING_OPEN } from "./types";

export const loadingOpen = (message) => async dispatch => {
    dispatch({
        type : LOADING_OPEN,
        payload : message
    });
        
}

export const loadingClose = () => async dispatch => {
    dispatch({
        type : LOADING_CLOSE,
    });
        
}