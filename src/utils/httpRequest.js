import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000/api/';
const config = {
  withCredentials: false,

    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  };

const httpRequest  = {
    get : (url) =>axios.get(url),
    post: (url, body) => axios.post(url, body, config),
    put: (url, body) => axios.put(url, body),
    delete: (url) => axios.delete(url),

};

export default httpRequest;
 