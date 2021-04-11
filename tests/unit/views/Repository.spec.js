import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import Vuex from 'vuex';
import { repositoryMock } from "../../mocks/repository.mock";
import { FETCH_REPOSITORY } from "@/store/actions";

import UserRepositories from "@/views/UserRepositories";
import Repository from "@/views/Repository";

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Repository.vue', () => {
    let actions;
    let getters;
    let store;
    let $route;

    beforeEach(() => {
        actions = {
            [FETCH_REPOSITORY]: jest.fn()
        };

        getters = {
            getRepositoryByUsernameAndName: () => () => jest.fn(repositoryMock.getRepositories)
        };

        store = new Vuex.Store({ getters, actions });

        $route = {
            path: '/repository/user/repo1',
            params: {
                username: 'user',
                repository: 'repo1'
            }
        };
    });

    it('should compile correctly the component', () => {
        const wrapper = shallowMount(Repository, {
            store,
            localVue,
            mocks: {
                $route
            }
        });

        expect(wrapper).toBeDefined();
    });

    // it('should fetch repositories for user in route params', async () => {
    //     jest.spyOn(store, 'dispatch').mockResolvedValue({});
    //
    //     shallowMount(UserRepositories, {
    //         store,
    //         localVue,
    //         mocks: {
    //             $route
    //         }
    //     });
    //
    //     expect(store.dispatch).toHaveBeenCalledWith(FETCH_USER_REPOSITORIES, 'guilhermechiara');
    // });
});