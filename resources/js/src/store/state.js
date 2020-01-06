
import navbarSearchAndPinList from "@/layouts/components/navbar/navbarSearchAndPinList"
import themeConfig from "@/../themeConfig.js"
import colors from "@/../themeConfig.js"

// /////////////////////////////////////////////
// Variables
// /////////////////////////////////////////////

const userDefaults = {
    id                  : 1,
    first_name          : "John",
    last_name           : "Doe",
    email               : "abdo.ra.1997@gmail.com",
    email_verified_at   : "2019-11-12 20:30:42",
    birth_date          : null,
    address             : null,
    city                : null,
    country             : null,
    phone               : null,
    gender              : null,
    image               : require("@assets/images/portrait/small/avatar-s-11.png"),
    created_at          : null,
    updated_at          : null,
    userRole            : "admin"
};

// /////////////////////////////////////////////
// State
// /////////////////////////////////////////////

const state = {
    // AppActiveUser           : userDefaults,
    // accessToken             : null,
    defaultPhoto            : require("@assets/images/portrait/small/avatar-s-11.png"),
    bodyOverlay             : false,
    isVerticalNavMenuActive : true,
    mainLayoutType          : themeConfig.mainLayoutType || "vertical",
    navbarSearchAndPinList  : navbarSearchAndPinList,
    reduceButton            : themeConfig.sidebarCollapsed,
    verticalNavMenuWidth    : "default",
    verticalNavMenuItemsMin : false,
    scrollY                 : 0,
    starredPages            : navbarSearchAndPinList.data.filter((page) => page.highlightAction),
    theme                   : themeConfig.theme || "light",
    themePrimaryColor       : colors.primary,

    // Can be used to get current window with
    // Note: Above breakpoint state is for internal use of sidebar & navbar component
    windowWidth             : null
};

export default state
