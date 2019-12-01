/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'


import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

import moduleAuth from './auth/moduleAuth.js'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
        auth: moduleAuth,
    },
    plugins: [vuexLocal.plugin],
    strict: process.env.NODE_ENV !== 'production'
})
