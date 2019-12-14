
import Vue from 'vue'
import Vuex from 'vuex'


import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

import moduleAuth from './auth/moduleAuth.js'
import moduleEmployee from './employee/moduleEmployee'
import modulePatient from './patient/modulePatient'
import moduleReservationType from './reservation-type/moduleReservationType'
import moduleReservationDuration from './reservation-duration/moduleReservationDuration'
import moduleRolesAndPermissions from './roles-and-permissions/moduleRolesAndPermissions'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

export default new Vuex.Store({
    namespaced: true,
    getters,
    mutations,
    state,
    actions,
    modules: {
        auth: moduleAuth,
        employee: moduleEmployee,
        patient: modulePatient,
        rolesAndPermissions: moduleRolesAndPermissions,
        reservationType: moduleReservationType,
        reservationDuration: moduleReservationDuration,
    },
    plugins: [vuexLocal.plugin],
    strict: process.env.NODE_ENV !== 'production'
})
