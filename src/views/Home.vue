<template>
  <div>
    <repository-list v-bind:repositories="repositories"></repository-list>
  </div>
</template>

<script>
  import store from "../store";
  import RepositoryList from "../components/RepositoryList";
  //import { FETCH_USER } from "../store/actions";
  import { FETCH_USER_REPOSITORIES } from "../store/actions";

  export default {
    name: 'view-home',
    components: {
      RepositoryList
    },
    data() {
      return {
        repositories: [
          { title: 'Something', subtitle: 'Random subtitle', url: '/repository/2' },
          { title: 'Something', subtitle: 'Random subtitle', url: '/repository/2' },
          { title: 'Something', subtitle: 'Random subtitle', url: '/repository/2' }
        ]
      }
    },

    beforeRouteEnter(to, from, next) {
      store.dispatch(FETCH_USER_REPOSITORIES, 'guilhermechiara')
          .then(() => next());
    }
  }
</script>