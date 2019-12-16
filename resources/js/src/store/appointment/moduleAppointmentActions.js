
import appointment from "../../http/requests/appointment/index"

export default {
    getData({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            appointment.getAll(payload)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },

    view({ commit, dispatch }, id) {
        return new Promise((resolve, reject) => {
            appointment.view(id)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },

    create({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            appointment.create(payload)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },

    update({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            appointment.update(payload.id, payload.data)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },

    delete({ commit, dispatch }, id) {
        return new Promise((resolve, reject) => {
            appointment.delete(id)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },
}
