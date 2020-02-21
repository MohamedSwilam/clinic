
import state from './modulePlanState'
import mutations from './modulePlanMutations'
import actions from './modulePlanActions'
import getters from './modulePlanGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

