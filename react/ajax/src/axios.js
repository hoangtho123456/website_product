import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

//instance.defaults.headers.common['Authenrization'] = 'Auth Token From Instance';
// instance.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
// instance.defaults.headers.common['Accept'] = 'application/json';

export default instance;
