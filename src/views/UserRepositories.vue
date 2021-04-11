<template>
  <div>
    <repository-list
        v-bind:owner="this.$route.params.username"
        v-bind:repositories="getTopThreeRepositories">
    </repository-list>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { FETCH_USER_REPOSITORIES } from '@/store/actions';

  import RepositoryList from "@/components/RepositoryList";

  export default {
    name: 'view-user-repositories',
    components: {
      RepositoryList
    },

    async beforeMount() {
      try {
        await this.$store.dispatch(FETCH_USER_REPOSITORIES, this.$route.params.username);
      } catch(err) {
        await this.$router.push('not-found');
      }
    },

    computed: {
      ...mapGetters(["getTopThreeRepositories"])
    }
  }
</script>