import axios from 'axios';

const instance = axios.create({
    // headers: {
    //     'Access-Control-Allow-Headers': '*',
    //     'X-Requested-With': 'XMLHttpRequest',
    //     'Access-Control-Allow-Origin' : '*',
    //     'Access-Control-Allow-Credentials': true,
    //     'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    // },
    baseURL: 'https://react-my-burger-98a01.firebaseio.com/'
});

export default instance;
