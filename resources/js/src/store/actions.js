import router from '@/router';

const actions = {

    // /////////////////////////////////////////////
    // COMPONENTS
    // /////////////////////////////////////////////

    // Vertical NavMenu
    updateVerticalNavMenuWidth({ commit }, width) {
      commit('UPDATE_VERTICAL_NAV_MENU_WIDTH', width)
    },

    // VxAutoSuggest
    updateStarredPage({ commit }, payload) {
      commit('UPDATE_STARRED_PAGE', payload)
    },

    // The Navbar
    arrangeStarredPagesLimited({ commit }, list) {
      commit('ARRANGE_STARRED_PAGES_LIMITED', list)
    },
    arrangeStarredPagesMore({ commit }, list) {
      commit('ARRANGE_STARRED_PAGES_MORE', list)
    },

    // /////////////////////////////////////////////
    // UI
    // /////////////////////////////////////////////

    toggleContentOverlay({ commit }) {
      commit('TOGGLE_CONTENT_OVERLAY')
    },
    updateTheme({ commit }, val) {
      commit('UPDATE_THEME', val)
    },


    viewWaitMessage({ commit }, payload)
    {
        payload.notify({
            title: 'Please, Wait..',
            text: 'Your request in in progress.',
            color: 'warning',
            iconPack: 'feather',
            icon: 'icon-clock'
        });
    },

    handleError({ commit }, payload)
    {
        switch (payload.error.response.status) {
            case 401:
                router.push('/dashboard/error-403');
                break;
            case 403:
                router.push('/dashboard/error-403');
                break;
            default:
                payload.reject(payload.error);
        }
    }
};

export default actions
