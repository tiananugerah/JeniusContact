import {create} from 'apisauce';

const api = create({
  baseURL: 'https://contact.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
