<template>
  <div>
    <div class="workflow">
      <card title="Workflow">
        You can see the top repositories of an user going through the <router-link to="workflow">workflow</router-link>
      </card>
    </div>
    <div class="repository">
      <repository-list
          v-bind:repositories="getTopThreeRepositories"
          owner="homeday-de"
      >
      </repository-list>
    </div>
  </div>
</template>

<style lang="scss">
  .workflow {
    margin-bottom: 2.4rem;
  }
</style>

<script>
  import { mapGetters } from 'vuex';
  import { FETCH_USER_REPOSITORIES } from "../store/actions";

  import RepositoryList from "@/components/RepositoryList";
  import Card from "@/components/Card";

  export default {
    name: 'view-home',
    components: {
      Card,
      RepositoryList
    },

    async beforeMount() {
      try {
        await this.$store.dispatch(FETCH_USER_REPOSITORIES, 'homeday-de');
      } catch(err) {
        console.log(this.$router);
        await this.$router.push('/not-found');
      }
    },

    computed: {
      ...mapGetters(["getTopThreeRepositories"])
    }
  }
</script>