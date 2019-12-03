
import reservation_type from "../../http/requests/reservation_type/index"

export default {
    getData({ commit }) {
        return new Promise((resolve, reject) => {
            reservation_type.getAll()
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error);
                })
        })
    },

    create({ commit }, payload) {
        return new Promise((resolve, reject) => {
            reservation_type.create(payload)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error);
                })
        })
    },

    delete({ commit }, id) {
        return new Promise((resolve, reject) => {
            reservation_type.delete(id)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error);
                })
        })
    },
}
