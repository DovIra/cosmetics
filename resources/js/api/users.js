import axios from 'axios';

export default {
    all() {
        return axios.get('/api/users');
    },
    find(id) {
        return axios.get(`/api/users/${id}`);
    },
    update(id, data) {
        return axios.put(`/api/users/${id}`, data);
    },
    delete(id) {
        return axios.delete(`/api/users/${id}`);
    },
    create(data) {
        return axios.post('/api/users', data);
    },
};