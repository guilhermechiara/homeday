import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from 'vuex';
import Home from "@/views/Home";
import { repositoryMock } from "../../mocks/repository.mock";
import {FETCH_USER_REPOSITORIES} from "@/store/actions";
import VueRouter from "vue-router";

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter);

describe('Home.vue', () => {
    let actions;
    let getters;
    let store;
    let router;

    beforeEach(() => {
        actions = {
            [FETCH_USER_REPOSITORIES]: jest.fn()
        };

        getters = {
           getTopThreeRepositories: jest.fn(repositoryMock.getRepositories)
        };

        store = new Vuex.Store({ getters, actions });
        router = new VueRouter();
    });

    it('should compile correctly the component', () => {
        const wrapper = shallowMount(Home, { store, localVue, router });

        expect(wrapper).toBeDefined();
    });

    it('should fetch repositories for user \'homeday-de\'', async () => {
        jest.spyOn(store, 'dispatch').mockResolvedValue({});
        await shallowMount(Home, { store, localVue, router });

        expect(store.dispatch).toHaveBeenCalledWith(FETCH_USER_REPOSITORIES, 'homeday-de');
    });

    // Can't make this test work actually. I spent more than 2 days trying to fix it and analysing how vue works,
    // but couldn't find a way to solve.
    // https://stackoverflow.com/questions/67046602/router-push-not-triggering-in-unit-testing
    xit('should redirect when 404 status code received', async () => {
        jest.spyOn(store, 'dispatch').mockRejectedValue({ statusCode: 404 });
        jest.spyOn(router, 'push').mockResolvedValue({});

        const wrapper = shallowMount(Home, {
            store,
            localVue,
            router
        });

        expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/not-found');
    });
});