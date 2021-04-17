import {instance} from "./utils";

export const getUsers = () => instance.get('/users?page=1');
// export const createUser = (data) => instance.post('/users', data);
// export const createOrder = (data) => instance.post('/orders', data);