
import Vue from 'vue'
import Vuex from 'vuex'


import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

import moduleAppointment from './appointment/moduleAppointment';
import moduleAuth from './auth/moduleAuth.js';
import moduleEmployee from './employee/moduleEmployee';
import moduleMedicalReport from './medical-report/moduleMedicalReport';
import modulePrescription from './prescription/modulePrescription';
import modulePlan from './plan/modulePlan';
import moduleNotification from './notification/moduleNotification';
import modulePatient from './patient/modulePatient';
import modulePayment from './payment/modulePayment';
import moduleReservationDuration from './reservation-duration/moduleReservationDuration';
import moduleReservationType from './reservation-type/moduleReservationType';
import moduleRolesAndPermissions from './roles-and-permissions/moduleRolesAndPermissions';

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
        appointment: moduleAppointment,
        auth: moduleAuth,
        employee: moduleEmployee,
        medicalReport: moduleMedicalReport,
        prescription: modulePrescription,
        plan: modulePlan,
        notification: moduleNotification,
        patient: modulePatient,
        payment: modulePayment,
        reservationDuration: moduleReservationDuration,
        reservationType: moduleReservationType,
        rolesAndPermissions: moduleRolesAndPermissions,
    },
    plugins: [vuexLocal.plugin],
    strict: process.env.NODE_ENV !== 'production'
})
