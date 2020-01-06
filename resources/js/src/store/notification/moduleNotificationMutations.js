
export default {
    // Updates notifications in local storage.
    UPDATE_NOTIFICATIONS(state, payload) {
        // Store data in localStorage
        state.unreadNotifications = payload.notifications;
    }
}
