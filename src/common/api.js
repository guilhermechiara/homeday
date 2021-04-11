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

    async get(resource, slug = "") {
        try {
          return (await Vue.axios.get(`${resource}/${slug}`)).data;
        } catch(error) {
            throw {
                statusCode: error.response.status,
                resource: `${resource}/${slug}`,
                message: error.response.data.message
            };
        }
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