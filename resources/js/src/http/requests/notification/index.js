import axios from "../../axios/index.js"
import store from "../../../store/store.js"
export default {
    getAll() {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`notification/${store.getters['auth/userData'].id}`)
    },

    getUnReaded() {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`notification/${store.getters['auth/userData'].id}`)
    },

    markAllAsReaded(id) {
        return axios.post(`notification/${store.getters['auth/userData'].id}`)
    }
}
