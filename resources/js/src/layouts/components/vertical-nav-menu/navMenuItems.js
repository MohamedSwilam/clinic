/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
    {
        url: "/dashboard",
        name: "Home",
        slug: "home",
        icon: "HomeIcon",
        i18n: "Home",
    },
    {
        url: "/dashboard/employee",
        name: "Employee",
        slug: "employee",
        icon: "UsersIcon",
        i18n: "Employee",
        permission: 'view-user'
    },
    {
        url: "/dashboard/patient",
        name: "Patient",
        slug: "patient",
        icon: "UserIcon",
        i18n: "Patient",
        permission: "view-patient"
    },
    {
        url: "/dashboard/appointment",
        name: "Appointment",
        slug: "appointment",
        icon: "EditIcon",
        i18n: "Appointment",
        permission: "view-appointment"
    },
    {
        name: "Settings",
        icon: "SettingsIcon",
        i18n: "Settings",
        submenu: [
            {
                url: '/dashboard/settings/role',
                name: "Roles & Permissions",
                slug: "role",
                i18n: "Roles",
                permission: "view-role"
            },
            {
                url: '/dashboard/settings/reservation',
                name: "Reservations",
                slug: "reservation",
                i18n: "reservation",
                permission: "view-reservation"
            }
        ]
    }
]
