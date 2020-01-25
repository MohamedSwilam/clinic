
import state from './modulePrescriptionState'
import mutations from './modulePrescriptionMutations'
import actions from './modulePrescriptionActions'
import getters from './modulePrescriptionGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

