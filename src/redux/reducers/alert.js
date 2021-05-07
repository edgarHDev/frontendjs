
import {
   
    SHOW_ALERT,
    HIDE_ALERT,
  
  } from '../actions/types';
  
  const initialState = {
    title: '',
    message : '',
    type : '',
    status : false
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
    
        case SHOW_ALERT:
          return {
            ...state,
            title: payload.title,
            message : payload.message,
            type : payload.type,
            status : true,
          };
        case HIDE_ALERT:
          return {
            ...state,
            title : '',
            message : '',
            type : '',
            status : false
        };
      
      default:
        return state;
    }
  }
  