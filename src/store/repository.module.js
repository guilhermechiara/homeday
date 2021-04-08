import { FETCH_REPOSITORY, FETCH_USER_REPOSITORIES } from "./actions";
import { SET_REPOSITORY } from "./mutations";
import { RepositoryService, UserService } from "../common/api";

const initialState = {
    data: {},
    loading: false,
    errors: {}
}

export const state = { ...initialState };

export const actions = {
    [FETCH_REPOSITORY](context, repositoryUrl) {
        return RepositoryService.get(repositoryUrl)
            .then(repository => context.commit(SET_REPOSITORY, repository))
            .catch(err => { throw new Error(err) });
    },
    [FETCH_USER_REPOSITORIES](context, owner) {
        return UserService.get(`${owner}/repos`)
            .then(response => {
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
                    defaultBranch: repository.default_branch
                }));

                context.commit(SET_REPOSITORY, repositories);
            })
            .catch(err => { throw new Error(err) });
    }
}

export const mutations = {
    [SET_REPOSITORY](state, repositories) {
        if (repositories instanceof Array) {
            // Converts the result of array [1], [2] into [id], [id]
            // I'm doing that so iteration is way faster than using filters and so
            state.data = repositories.reduce((previous, repository) => ({
                ...previous,
                [repository.id]: repository
            }), {});
        } else {
            state.data[repositories.id] = repositories;
        }
    },
}

export const getters = {
    getRepositories: (state) => {
        return state.data
    }
}

export default {
    state,
    getters,
    mutations,
    actions
};