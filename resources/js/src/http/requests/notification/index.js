import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`notification${filters}`)
    },

    update(id, data) {
        return axios.post(`notification`, data)
    }
}
