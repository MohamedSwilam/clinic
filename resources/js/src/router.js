/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: '/',
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [
        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '/dashboard',
            component: () => import('./layouts/main/Main.vue'),
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: '/dashboard',
                    name: 'home',
                    component: () => import('./views/Home.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard', i18n: 'Home', active: true },
                        ],
                        pageTitle: 'Home',
                        pageTitle_i18n: 'Home',
                        rule: 'editor'
                    }
                },

                {
                    path: '/dashboard/employee',
                    name: 'employee',
                    component: () => import('./views/employee/Employee.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard', i18n: 'Home' },
                            { title: 'Employee', active: true, i18n: 'Employee' },
                        ],
                        pageTitle: 'Employee',
                        pageTitle_i18n: 'Employee',
                        rule: 'editor'
                    }
                },
                {
                    path: '/dashboard/employee/add-employee',
                    name: 'add-employee',
                    component: () => import('./views/employee/AddEmployee.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard', i18n: 'Home' },
                            { title: 'Employee', url: '/dashboard/employee', i18n: 'Employee' },
                            { title: 'Add Employee', active: true, i18n: 'AddEmployee' },
                        ],
                        pageTitle: 'Add Employee',
                        pageTitle_i18n: 'AddEmployee',
                        rule: 'editor'
                    }
                },
                {
                    path: '/dashboard/patient',
                    name: 'patient',
                    component: () => import('./views/patient/Patient.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard', i18n: 'Home' },
                            { title: 'Patient', active: true, i18n: 'Patient' },
                        ],
                        pageTitle: 'Patient',
                        pageTitle_i18n: 'Patient',
                        rule: 'editor'
                    }
                },
                {
                    path: '/dashboard/appointment',
                    name: 'appointment',
                    component: () => import('./views/appointment/Appointment.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard', i18n: 'Home' },
                            { title: 'Appointment', active: true, i18n: 'Appointment' },
                        ],
                        pageTitle: 'Appointment',
                        pageTitle_i18n: 'Appointment',
                        rule: 'editor'
                    }
                },
                {
                    path: '/dashboard/appointment/add-appointment/:patient_id',
                    name: 'add-appointment',
                    component: () => import('./views/appointment/AddAppointment.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard', i18n: 'Home' },
                            { title: 'Appointment', url: '/dashboard/appointment', i18n: 'Appointment' },
                            { title: 'Add Appointment', active: true, i18n: 'AddAppointment' },
                        ],
                        pageTitle: 'Add Appointment',
                        pageTitle_i18n: 'AddAppointment',
                        rule: 'editor'
                    }
                },
                {
                    path: '/dashboard/invoice',
                    name: 'invoice',
                    component: () => import('./views/Page2.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard', i18n: 'Home' },
                            { title: 'Invoice', active: true, i18n: 'Invoice' },
                        ],
                        pageTitle: 'Invoice',
                        pageTitle_i18n: 'Invoice',
                        rule: 'editor'
                    }
                },
                {
                    path: '/dashboard/calendar',
                    name: 'calendar',
                    component: () => import('./views/calendar/Calendar.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard', i18n: 'Home' },
                            { title: 'Calendar', active: true, i18n: 'Calendar' },
                        ],
                        pageTitle: 'Calendar',
                        pageTitle_i18n: 'Calendar',
                        rule: 'editor'
                    }
                }
            ],
        },
        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================
        {
            path: '',
            component: () => import('./layouts/full-page/FullPage.vue'),
            children: [
                // =============================================================================
                // PAGES
                // =============================================================================
                {
                    path: '/login',
                    name: 'pageLogin',
                    component: () => import('./views/pages/Login.vue')
                },
                {
                    path: '/pages/error-404',
                    name: 'pageError404',
                    component: () => import('./views/pages/Error404.vue')
                },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/error-404'
        }
    ],
});

// router.afterEach(() => {
//     // Remove initial loading
//     const appLoading = document.getElementById('loading-bg')
//     if (appLoading) {
//         appLoading.style.display = "none";
//     }
// });

export default router
