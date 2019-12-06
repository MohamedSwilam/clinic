import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        return axios.get(`reservation-duration${filters}`)
    },

    view(id) {
        return axios.get(`reservation-duration/${id}`)
    },

    create(data) {
        return axios.post(`reservation-duration`, data)
    },

    update(id, data) {
        return axios.post(`reservation-duration/${id}`, data)
    },

    delete(id) {
        return axios.delete(`reservation-duration/${id}`)
    }
}
