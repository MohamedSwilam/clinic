
import state from './modulePatientState'
import mutations from './modulePatientMutations'
import actions from './modulePatientActions'
import getters from './modulePatientGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

