
import notification from "../../http/requests/notification/index"

export default {

    getNotifications({ dispatch }, payload) {
        return new Promise((resolve, reject) => {
            notification.getAll(payload)
                .then(response => {
                    commit('UPDATE_NOTIFICATIONS', {NOTIFICATIONS: response.data.data});
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        });
    },

    update({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            notification.update(payload.id, payload.data)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },
}
