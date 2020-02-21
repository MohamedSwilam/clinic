import axios from "../../axios/index.js"
export default {
    browse(filters) {
        return axios.get(`plan${filters}`);
    },

    view(id) {
        return axios.get(`plan/${id}`);
    },

    create(data) {
        return axios.post(`plan`, data);
    },

    update(id, data) {
        return axios.post(`plan/${id}`, data);
    },

    delete(id) {
        return axios.delete(`plan/${id}`);
    }
}
