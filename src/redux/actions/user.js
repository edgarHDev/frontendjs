import httpRequest from "../../utils/httpRequest";
import { showAlert } from "./alert";
import { loadingClose } from "./loading";


// Add Post
export const getUsers = () => async dispatch => {
    try {
        const res =  httpRequest.get('users/');
        return res;
    } catch (err) {
      /*  dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });*/

        return err;

    }finally{
        dispatch(loadingClose())
    }
}

// Add Post
export const addUser = (formData) => async dispatch => {
    try {
        const res = await httpRequest.post('users/addUser', JSON.stringify(formData));
        return res;
    } catch (err) {
        const errors = err.response.data.errors;
        let message = '';
        if (errors) {
             errors.forEach((error) => { message += error.msg + '<br >'
            })
             
        }
        alert(message)
        if(message !==''){
            dispatch(showAlert('Nuevo usuario', message, 'danger'))
        }

        return err;

    }finally{
        dispatch(loadingClose())
    }
}