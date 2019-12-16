
import state from './moduleAppointmentState'
import mutations from './moduleAppointmentMutations'
import actions from './moduleAppointmentActions'
import getters from './moduleAppointmentGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

