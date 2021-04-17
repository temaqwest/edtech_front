import axios from 'axios';
import store from "../store"

const API_BASE_URL = "http://31.172.133.69:61444/api";

export const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    crossdomain: true
});

// При каждом вызове запроса с помощью axios axios
instance.interceptors.request.use(function (config) {
    store.commit('SET_LOADING', true)
    return config;
}, function (error) {
    return Promise.reject(error);
});

// При каждом получении ответа
instance.interceptors.response.use(function (response) {
    store.commit('SET_LOADING', false)
    return response;
}, function (error) {
    return Promise.reject(error);
});


