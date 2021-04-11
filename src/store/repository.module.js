import { FETCH_REPOSITORY } from "./actions";
import { SET_REPOSITORIES } from "./mutations";
import { RepositoryService } from "../common/api";
import { transformToDataStore } from "@/common/utils";

const initialState = {
    data: {},
    loading: false,
    errors: {}
}

export const state = { ...initialState };

export const actions = {
    async [FETCH_REPOSITORY](context, repositoryUrl) {
        const response = await RepositoryService.get(repositoryUrl);
        const repository = {
            id: response.id,
            name: response.name,
            fullName: response.full_name,
            ownerId: response.owner.id,
            ownerLogin: response.owner.login,
            htmlUrl: response.html_url,
            description: response.description,
            watchersCount: response.watchers_count,
            forksCount: response.forks_count,
            openIssuesCount: response.open_issues_count,
            defaultBranch: response.default_branch,
            language: response.language
        };

        context.commit(SET_REPOSITORIES, repository);
    }
}

export const mutations = {
    [SET_REPOSITORIES](state, repositories) {
        if (repositories instanceof Array) {
            state.data = transformToDataStore(repositories, 'fullName')
        } else {
            state.data[repositories.fullName] = repositories;
        }

        state.loading = false;
        state.errors = {};
    }
}

export const getters = {
    getRepositories: (state) => {
        return Object.values(state.data);
    },

    getTopThreeRepositories: (state) => {
        // First, order decreasing by watchers
        // Then, get the first 3 repos
        return Object.values(state.data)
            .sort((a, b) => b.watchersCount - a.watchersCount)
            .slice(0, 3);
    },

    getRepositoryByUsernameAndName: (state) => (username, name) => {
        return state.data[`${username}/${name}`];
    }
}

export default {
    state,
    getters,
    mutations,
    actions
};