
import Vue from 'vue';
import Router from 'vue-router';
import store from './store/store';
import axios from "./http/axios/index.js"

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
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard', i18n: 'Home', active: true },
                        ],
                        pageTitle: 'Home',
                        pageTitle_i18n: 'Home'
                    }
                },

                {
                    path: '/dashboard/employee',
                    name: 'employee',
                    component: () => import('./views/employee/browse.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard', i18n: 'Home' },
                            { title: 'Employee', active: true, i18n: 'Employee' },
                        ],
                        pageTitle: 'Employee',
                        pageTitle_i18n: 'Employee',
                        permission: 'view-user'
                    }
                },
                {
                    path: '/dashboard/employee/create',
                    name: 'add-employee',
                    component: () => import('./views/employee/create.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard', i18n: 'Home' },
                            { title: 'Employee', url: '/dashboard/employee', i18n: 'Employee' },
                            { title: 'Add Employee', active: true, i18n: 'AddEmployee' },
                        ],
                        pageTitle: 'Add Employee',
                        pageTitle_i18n: 'AddEmployee',
                        permission: 'create-user'
                    }
                },
                {
                    path: '/dashboard/employee/:id',
                    name: 'view-employee',
                    component: () => import('./views/employee/view.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard', i18n: 'Home' },
                            { title: 'Employee', url: '/dashboard/employee', i18n: 'Employee' },
                            { title: 'Profile', active: true, i18n: 'EmployeeProfile' },
                        ],
                        pageTitle: 'Edit Employee',
                        pageTitle_i18n: 'editEmployee',
                        permission: 'view-user'
                    }
                },
                {
                    path: '/dashboard/employee/:id/edit',
                    name: 'edit-employee',
                    component: () => import('./views/employee/edit.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard', i18n: 'Home' },
                            { title: 'Employee', url: '/dashboard/employee', i18n: 'Employee' },
                            { title: 'Edit Employee', active: true, i18n: 'editEmployee' },
                        ],
                        pageTitle: 'Edit Employee',
                        pageTitle_i18n: 'editEmployee',
                        permission: 'edit-user'
                    }
                },
                {
                    path: '/dashboard/patient',
                    name: 'patient',
                    component: () => import('./views/patient/Patient.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard', i18n: 'Home' },
                            { title: 'Patient', active: true, i18n: 'Patient' },
                        ],
                        pageTitle: 'Patient',
                        pageTitle_i18n: 'Patient',
                        permission: 'view-patient'
                    }
                },
                {
                    path: '/dashboard/patient/create',
                    name: 'create-patient',
                    component: () => import('./views/patient/create.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard', i18n: 'Home' },
                            { title: 'Patient', i18n: 'Patient', url: '/dashboard/patient' },
                            { title: 'Create', active: true, i18n: 'CreatePatient' },
                        ],
                        pageTitle: 'Create Patient',
                        pageTitle_i18n: 'CreatePatient',
                        permission: 'create-patient'
                    }
                },
                {
                    path: '/dashboard/patient/:id/edit',
                    name: 'edit-patient',
                    component: () => import('./views/patient/edit.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard', i18n: 'Home' },
                            { title: 'Patient', i18n: 'Patient', url: '/dashboard/patient' },
                            { title: 'Edit', active: true, i18n: 'EditPatient' },
                        ],
                        pageTitle: 'Edit Patient',
                        pageTitle_i18n: 'EditPatient',
                        permission: 'edit-patient'
                    }
                },
                {
                    path: '/dashboard/patient/:id',
                    name: 'profile-patient',
                    component: () => import('./views/patient/profile.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard', i18n: 'Home' },
                            { title: 'Patient', i18n: 'Patient', url: '/dashboard/patient' },
                            { title: 'Profile', active: true, i18n: 'profile' },
                        ],
                        pageTitle: 'Profile',
                        pageTitle_i18n: 'Profile',
                        permission: 'view-patient'
                    }
                },
                {
                    path: '/dashboard/patient/:id/create-medical-report',
                    name: 'create-medical-report',
                    component: () => import('./views/medicalReport/create'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard'},
                            { title: 'Patient', i18n: 'Patient', url: '/dashboard/patient' },
                            { title: 'Profile'},
                            { title: 'Create Medical Report', active: true}
                        ],
                        pageTitle: "Create Medical Report",
                        permission: 'create-medical-report'
                    }
                },
                {
                    path: '/dashboard/medical-report/:id',
                    name: 'medical-report-view',
                    component: () => import('./views/medicalReport/view'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard'},
                            { title: 'Patient', i18n: 'Patient', url: '/dashboard/patient' },
                            { title: 'Profile'},
                            { title: 'View Medical Report', active: true}
                        ],
                        pageTitle: "View Medical Report",
                        permission: 'view-medical-report'
                    }
                },
                {
                    path: '/dashboard/medical-report/:id/edit',
                    name: 'medical-report-edit',
                    component: () => import('./views/medicalReport/edit'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard'},
                            { title: 'Patient', i18n: 'Patient', url: '/dashboard/patient' },
                            { title: 'Profile'},
                            { title: 'Edit Medical Report', active: true}
                        ],
                        pageTitle: "Edit Medical Report",
                        permission: 'edit-medical-report'
                    }
                },


                {
                    path: '/dashboard/patient/:id/create-report',
                    name: 'report-create',
                    component: () => import('./views/prescription/create'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard'},
                            { title: 'Patient', i18n: 'Patient', url: '/dashboard/patient' },
                            { title: 'Profile'},
                            { title: 'Create Report', active: true}
                        ],
                        pageTitle: "Create Report",
                        permission: 'create-prescription'
                    }
                },
                {
                    path: '/dashboard/report/:id',
                    name: 'report-view',
                    component: () => import('./views/prescription/view'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard'},
                            { title: 'Patient', i18n: 'Patient', url: '/dashboard/patient' },
                            { title: 'Profile'},
                            { title: 'View Report', active: true}
                        ],
                        pageTitle: "View Report",
                        permission: 'view-prescription'
                    }
                },
                {
                    path: '/dashboard/report/:id/edit',
                    name: 'report-edit',
                    component: () => import('./views/prescription/edit'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard'},
                            { title: 'Patient', i18n: 'Patient', url: '/dashboard/patient' },
                            { title: 'Profile'},
                            { title: 'Edit Report', active: true}
                        ],
                        pageTitle: "Edit Report",
                        permission: 'edit-prescription'
                    }
                },


                {
                    path: '/dashboard/appointment',
                    name: 'appointment',
                    component: () => import('./views/appointment/Appointment.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard', i18n: 'Home' },
                            { title: 'Appointment', active: true, i18n: 'Appointment' },
                        ],
                        pageTitle: 'Appointment',
                        pageTitle_i18n: 'Appointment',
                        permission: 'browse-appointment'
                    }
                },
                {
                    path: '/dashboard/appointment/add-appointment/:patient_id',
                    name: 'add-appointment',
                    component: () => import('./views/appointment/AddAppointment.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard', i18n: 'Home' },
                            { title: 'Appointment', url: '/dashboard/appointment', i18n: 'Appointment' },
                            { title: 'Add Appointment', active: true, i18n: 'AddAppointment' },
                        ],
                        pageTitle: 'Add Appointment',
                        pageTitle_i18n: 'AddAppointment',
                        permission: 'create-appointment'
                    }
                },
                {
                    path: '/dashboard/settings/role',
                    name: 'role',
                    component: () => import('./views/settings/Role/Roles.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard'},
                            { title: 'Settings'},
                            { title: 'Roles', active: true}
                        ],
                        pageTitle: "Roles",
                        permission: 'view-role'
                    }
                },
                {
                    path: '/dashboard/settings/role/create',
                    name: 'create-role',
                    component: () => import('./views/settings/Role/Create.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard'},
                            { title: 'Settings'},
                            { title: 'Roles', url: '/dashboard/settings/role'},
                            { title: 'Create Role', active: true}
                        ],
                        pageTitle: "Create Role",
                        permission: 'assign-role'
                    }
                },
                {
                    path: '/dashboard/settings/role/:id',
                    name: 'view-role',
                    component: () => import('./views/settings/Role/View.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard'},
                            { title: 'Settings'},
                            { title: 'Roles', url: '/dashboard/settings/role'},
                            { title: 'Role Information', active: true}
                        ],
                        pageTitle: "Role Information",
                        permission: 'view-role'
                    }
                },
                {
                    path: '/dashboard/settings/role/edit/:id',
                    name: 'edit-role',
                    component: () => import('./views/settings/Role/Edit.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard'},
                            { title: 'Settings'},
                            { title: 'Roles', url: '/dashboard/settings/role'},
                            { title: 'Edit Role', active: true}
                        ],
                        pageTitle: "Edit Role",
                        permission: 'edit-role'
                    }
                },
                {
                    path: '/dashboard/settings/reservation',
                    name: 'browse-reservation',
                    component: () => import('./views/settings/reservation/browse.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard'},
                            { title: 'Settings'},
                            { title: 'Reservation', active: true}
                        ],
                        pageTitle: "Reservation Settings",
                        permission: 'view-reservation'
                    }
                },
                {
                    path: '/dashboard/settings/reservation/create',
                    name: 'create-reservation',
                    component: () => import('./views/settings/reservation/create.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard'},
                            { title: 'Settings'},
                            { title: 'Reservation', url: '/dashboard/settings/reservation'},
                            { title: 'Create', active: true}
                        ],
                        pageTitle: "Create Reservation Type",
                        permission: 'create-reservation'
                    }
                },
                {
                    path: '/dashboard/settings/reservation/edit/:id',
                    name: 'edit-reservation',
                    component: () => import('./views/settings/reservation/edit.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard'},
                            { title: 'Settings'},
                            { title: 'Reservation', url: '/dashboard/settings/reservation'},
                            { title: 'Edit', active: true}
                        ],
                        pageTitle: "Edit Reservation Type",
                        permission: 'edit-reservation'
                    }
                },
                {
                    path: '/dashboard/settings/reservation-duration/create',
                    name: 'create-reservation-duration',
                    component: () => import('./views/settings/reservation/create-duration.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard'},
                            { title: 'Settings'},
                            { title: 'Reservation', url: '/dashboard/settings/reservation'},
                            { title: 'Create Duration', active: true}
                        ],
                        pageTitle: "Create Reservation Duration",
                        permission: 'create-reservation'
                    }
                },
                {
                    path: '/dashboard/profile',
                    name: 'profile',
                    component: () => import('./views/profile/profile'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/dashboard'},
                            { title: 'Profile', active: true}
                        ],
                        pageTitle: "Profile"
                    }
                },

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
                    path: '/dashboard/login',
                    name: 'pageLogin',
                    component: () => import('./views/pages/Login.vue')
                },
                {
                    path: '/dashboard/error-403',
                    name: 'pageError403',
                    component: () => import('./views/pages/NotAuthorized.vue')
                },
                {
                    path: '/dashboard/error-404',
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

router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
});

function can(permission) {
    let hasPermission = false;
    store.state.auth.AppActiveUser.roles[0].permissions.forEach((userPermission) => {
        if(userPermission.name === permission){
            hasPermission = true;
        }
    });
    return hasPermission;
}

function guard(to, from, next) {
    if (store.state.auth.accessToken) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.auth.accessToken.accessToken}`;
        if (new Date(Date.now()) < new Date(store.state.auth.accessToken.token.expires_at)){
            to.meta.permission===undefined||can(to.meta.permission)?next():next('/dashboard/error-403');
        } else {
            next('/dashboard/login');
        }
    } else {
        next('/dashboard/login');
    }
}

export default router
