import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`patient${filters}`)
    },

    create(data) {
        return axios.post(`patient`, data)
    },

    update(id, data) {
        return axios.post(`patient/${id}`, data)
    },

    delete(id) {
        return axios.delete(`patient/${id}`)
    }
}
