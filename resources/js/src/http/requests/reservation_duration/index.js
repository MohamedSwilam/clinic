import axios from "../../axios/index.js"
export default {
    getAll() {
        return axios.get("reservation-duration")
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
