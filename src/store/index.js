import Vue from 'vue'
import Vuex from 'vuex'

import cricket from './cricket'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        cricket
    }
});

export default store
