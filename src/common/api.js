import Vue from 'vue';
import VueAxios from "vue-axios";
import axios from 'axios';
import { API_URL } from './config';

const ApiService = {
    init() {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = API_URL;
    },

    setHeader() {
        Vue.axios.defaults.headers.common["Content-Type"] = "application/json";
    },

    get(resource, slug = "") {
        return Vue.axios.get(`${resource}/${slug}`)
            .then(response => response.data)
            .catch(error => { throw new Error(`Api Service failed: ${error}`) });
    }
}

export default ApiService;

export const RepositoryService = {
    get(slug) {
        return ApiService.get('repos', slug);
    }
}

export const UserService = {
    get(slug) {
        return ApiService.get('users', slug);
    }
}