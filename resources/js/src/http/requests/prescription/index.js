import axios from "../../axios/index.js"
export default {
    browse(filters) {
        return axios.get(`prescription${filters}`);
    },

    view(id) {
        return axios.get(`prescription/${id}`);
    },

    create(data) {
        return axios.post(`prescription`, data);
    },

    update(id, data) {
        return axios.post(`prescription/${id}`, data);
    },

    delete(id) {
        return axios.delete(`prescription/${id}`);
    }
}
