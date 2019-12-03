import axios from "../../axios/index.js"
export default {
    getAll() {
        return axios.get("reservation-type")
    },

    create(data) {
        return axios.post(`reservation-type`, data)
    },

    update(id, data) {
        return axios.post(`reservation-type/${id}`, data)
    },

    delete(id) {
        return axios.delete(`reservation-type/${id}`)
    }
}
