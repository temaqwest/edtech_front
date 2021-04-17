import {instance} from "./utils";

export const getInt = () => instance.get('/internships?page=1');
// export const createUser = (data) => instance.post('/users', data);
export const getMyVacancies = (data) => instance.get('/internships?organization=api/organizations/' + data);