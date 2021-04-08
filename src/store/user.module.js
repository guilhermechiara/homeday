import { FETCH_USER } from "./actions";
import { SET_USER } from "./mutations";
import { UserService } from "../common/api";

const initialState = {
    data: {},
    repositories: {},
    loading: false,
    errors: {}
}

export const state = { ...initialState };

export const actions = {
    [FETCH_USER](context, slug) {
        return UserService.get(slug)
            .then(response => {
                console.log(response);

                const user = {
                    id: response.id,
                    login: response.login,
                    avatar: response.avatar_url,
                    name: response.name,
                    location: response.location,
                };

                context.commit(SET_USER, user);
            })
    }
}

export const mutations = {
    [SET_USER](state, user) {
        state.data[user.id] = user;
        state.repositories = {};
        state.loading = false;
        state.errors = {};
    }
}

export const getters = {
    getUsers: (state) => {
        return state.data;
    },

    getUserById: (state) => (id) => {
        return state.data[id];
    }
}

export default {
    state,
    actions,
    mutations,
    getters
};