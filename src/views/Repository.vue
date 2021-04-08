<template>
  <repository v-bind:repository="repository"></repository>
</template>

<script>
  import Repository from "../components/Repository";

  export default {
    name: 'view-repository',
    data() {
      return {
        repository: { id: null, name: 'kwest-users', owner: 'Repo user', language: 'Python' }
      }
    },
    components: {
      Repository
    },
    beforeMount() {
      this.repository.id = this.$route.params.id;
    }
  }
</script>