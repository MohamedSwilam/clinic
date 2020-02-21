
import plan from "../../http/requests/plan/index";

export default {
    browse({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            plan.browse(payload)
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
            plan.create(payload)
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
            plan.delete(id)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },
}
