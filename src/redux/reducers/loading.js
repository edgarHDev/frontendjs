
import {
   
    LOADING_OPEN,
    LOADING_CLOSE,
  
  } from '../actions/types';
  
  const initialState = {
    status: false,
    message : ''
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
    
        case LOADING_OPEN:
          return {
            ...state,
            status: true,
            message : payload
          };
        case LOADING_CLOSE:
          return {
            ...state,
            status: false,
            message : ''
        };
      
      default:
        return state;
    }
  }
  