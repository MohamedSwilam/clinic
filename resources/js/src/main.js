
import Vue from 'vue'
import App from './App.vue'

// Vuesax Component Framework
import Vuesax from 'vuesax'
Vue.use(Vuesax);

import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css'; // Vuesax

Vue.use(require('vue-moment'));

// import '@fortawesome/fontawesome-free/css/all.css';
// import '@fortawesome/fontawesome-free/js/all';

// Vuex Store
import store from './store/store'

// axios
import axios from 'axios'
Vue.prototype.$http = axios;

// Theme Configurations
import '../themeConfig.js'

// Algolia - Instant Search
import InstantSearch from 'vue-instantsearch';
Vue.use(InstantSearch);

// Globally Registered Components
import './globalComponents.js'


// Styles: SCSS
import '../../assets/scss/main.scss'


// Tailwind
import '../../assets/css/main.css';


// Vue Router
import router from './router'

// Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer';
Vue.use(VueHammer);

// i18n
import i18n from './i18n/i18n'

// Filters
import './filters/filters'


// Clipboard
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard);

// VeeValidate
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

import VueEasyCm from 'vue-easycm';
Vue.use(VueEasyCm);

// Google Maps
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
    load: {
        // Add your API key here
        key: 'AIzaSyC1qDLZ8CXn--s1m3mFQfirZi8mI0KgMmo',
        libraries: 'places', // This is required if you use the Auto complete plug-in
    },
});


// PrismJS
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';


// Feather font icon
require('../../assets/css/iconfont.css');

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');

















