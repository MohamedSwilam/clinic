
import notification from "../../http/requests/notification/index"

export default {

    getNotifications({ commit, dispatch }) {
        return new Promise((resolve, reject) => {
            notification.getAll()
                .then(response => {
                    commit('UPDATE_NOTIFICATIONS', response.data.data);
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        });
    },

    getUnReadedNotifications({ commit, dispatch }) {
        return new Promise((resolve, reject) => {
            notification.getUnReaded()
                .then(response => {
                    commit('UPDATE_NOTIFICATIONS', response.data.data);
                    resolve(response)
                })
                .catch(error => {
                    console.log(error);
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        });
    },

    markAllAsReaded({ commit, dispatch }) {
        return new Promise((resolve, reject) => {
            notification.markAllAsReaded()
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },
}
