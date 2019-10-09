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
        url: "/",
        name: "Home",
        slug: "home",
        icon: "HomeIcon",
        i18n: "Home",
    },
    {
        url: "/employee",
        name: "Employee",
        slug: "employee",
        icon: "UsersIcon",
        i18n: "Employee"
    },
    {
        url: "/patient",
        name: "Patient",
        slug: "patient",
        icon: "UserIcon",
        i18n: "Patient"
    },
    {
        url: "/appointment",
        name: "Appointment",
        slug: "appointment",
        icon: "EditIcon",
        i18n: "Appointment"
    },
    {
        url: "/invoice",
        name: "Invoice",
        slug: "invoice",
        icon: "FileIcon",
        i18n: "Invoice"
    },
    {
        url: "/calendar",
        name: "Calendar",
        slug: "calendar",
        icon: "CalendarIcon",
        i18n: "Calendar"
    },
    {
        url: "/lab",
        name: "Lab",
        slug: "lab",
        icon: "ThermometerIcon",
        i18n: "Lab"
    },
    {
        url: "/settings",
        name: "Settings",
        slug: "settings",
        icon: "SettingsIcon",
        i18n: "Settings",
        submenu: [
            {
                url: '/settings/theme',
                name: "Theme Customizer",
                slug: "theme",
                i18n: "Theme"
            },
            {
                url: '/settings/privacy',
                name: "Privacy",
                slug: "privacy",
                i18n: "Privacy"
            },
        ]
    }
]
