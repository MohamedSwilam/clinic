import axios from "../../axios/index.js"
export default {
    browse(filters) {
        return axios.get(`medical-report${filters}`);
    },

    view(id) {
        return axios.get(`medical-report/${id}`);
    },

    create(data) {
        return axios.post(`medical-report`, data);
    },

    update(id, data) {
        return axios.post(`medical-report/${id}`, data);
    },

    delete(id) {
        return axios.delete(`medical-report/${id}`);
    }
}
