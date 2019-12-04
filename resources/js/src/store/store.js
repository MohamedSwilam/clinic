
import Vue from 'vue'
import Vuex from 'vuex'


import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

import moduleAuth from './auth/moduleAuth.js'
import moduleReservationType from './reservation-type/moduleReservationType'
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
        reservationType: moduleReservationType,
        rolesAndPermissions: moduleRolesAndPermissions
    },
    plugins: [vuexLocal.plugin],
    strict: process.env.NODE_ENV !== 'production'
})
