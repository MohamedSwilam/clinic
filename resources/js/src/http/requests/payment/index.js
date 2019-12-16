import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`payment${filters}`)
    },

    view(id) {
        return axios.get(`payment/${id}`)
    },

    create(data) {
        return axios.post(`payment`, data)
    },

    update(id, data) {
        return axios.post(`payment/${id}`, data)
    },

    delete(id) {
        return axios.delete(`payment/${id}`)
    }
}
