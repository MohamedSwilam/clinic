
import state from './moduleMedicalReportState'
import mutations from './moduleMedicalReportMutations'
import actions from './moduleMedicalReportActions'
import getters from './moduleMedicalReportGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

