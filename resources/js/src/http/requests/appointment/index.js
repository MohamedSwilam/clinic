import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`appointment${filters}`)
    },

    view(id) {
        return axios.get(`appointment/${id}`)
    },

    create(data) {
        return axios.post(`appointment`, data)
    },

    update(id, data) {
        return axios.post(`appointment/${id}`, data)
    },

    delete(id) {
        return axios.delete(`appointment/${id}`)
    }
}
