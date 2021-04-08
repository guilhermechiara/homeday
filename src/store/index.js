import Vue from 'vue';
import Vuex from 'vuex';

import repository from './repository.module';
import user from './user.module';

Vue.use(Vuex);
Vue.config.devtools = true;

export default new Vuex.Store({
    modules: {
        repository,
        user
    }
});