import { FETCH_USER, FETCH_USER_REPOSITORIES } from "./actions";
import { SET_REPOSITORIES, SET_USER_REPOSITORIES, SET_USERS } from "./mutations";
import { UserService } from "@/common/api";
import { transformToDataStore } from "@/common/utils";

const initialState = {
    data: {},
    repositories: {},
    loading: false,
    errors: {}
}

export const state = { ...initialState };

export const actions = {
    async [FETCH_USER](context, username) {
        const response = await UserService.get(username);
        const user = {
            id: response.id,
            login: response.login,
            avatar: response.avatar_url,
            name: response.name,
            location: response.location,
        };

        context.commit(SET_USERS, user);
        return user;
    },

    async [FETCH_USER_REPOSITORIES](context, owner) {
        await context.dispatch(FETCH_USER, owner);
        const response = await UserService.get(`${owner}/repos`);

        const repositories = response.map(repository => ({
            id: repository.id,
            name: repository.name,
            fullName: repository.full_name,
            ownerId: repository.owner.id,
            ownerLogin: repository.owner.login,
            htmlUrl: repository.html_url,
            description: repository.description,
            watchersCount: repository.watchers_count,
            forksCount: repository.forks_count,
            openIssuesCount: repository.open_issues_count,
            defaultBranch: repository.default_branch,
            language: repository.language
        }));

        context.commit(SET_USER_REPOSITORIES, { owner, repositories });
        context.commit(SET_REPOSITORIES, repositories);
    }
}

export const mutations = {
    [SET_USERS](state, users) {
        if (users instanceof Array) {
            state.data = transformToDataStore(users, 'login')
        } else {
            state.data[users.login] = users;
        }

        state.repositories = {};
        state.loading = false;
        state.errors = {};
    },

    [SET_USER_REPOSITORIES](state, { owner, repositories }) {
        state.repositories[owner] = repositories.map(repository => repository.fullName);
        state.loading = false;
        state.errors = {};
    }
}

export const getters = {
    getUserRepositories: (state) => (username) => {
        return state.repositories[username];
    }
}

export default {
    state,
    actions,
    mutations,
    getters
};