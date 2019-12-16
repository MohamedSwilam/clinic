
import state from './modulePaymentState'
import mutations from './modulePaymentMutations'
import actions from './modulePaymentActions'
import getters from './modulePaymentGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

