<template>
  <div>
    <repository
        v-bind:repository="getRepositoryByUsernameAndName(
            this.$route.params.username,
            this.$route.params.repository
        )"
    >
    </repository>
  </div>
</template>

<script>
  import { FETCH_REPOSITORY } from "@/store/actions";
  import { mapGetters } from 'vuex';

  import Repository from "../components/Repository";

  export default {
    name: 'view-repository',
    components: {
      Repository,
    },

    async beforeMount() {
      try {
        await this.$store.dispatch(
            FETCH_REPOSITORY,
            `${this.$route.params.username}/${this.$route.params.repository}`
        );
      } catch (err) {
        await this.$router.push('/not-found')
      }
    },

    computed: {
      ...mapGetters(["getRepositoryByUsernameAndName"])
    }
  }
</script>