<template>
  <card v-bind:title="repository.name" v-bind:subtitle="repository.language">
    <div class="repository">
      <div class="repository-field">
        <label for="owner">Repository Owner</label>
        <p id="owner"> {{ repository.ownerLogin }}</p>
      </div>

      <div class="repository-field">
        <label for="description">Description</label>
        <p id="description"> {{ repository.description }}</p>
      </div>

      <div class="repository-field">
        <label for="github-link">Github link</label>
        <p id="github-link"><a v-bind:href="repository.htmlUrl" target="_blank">{{repository.htmlUrl}}</a></p>
      </div>

      <div class="repository-field">
        <label for="branch">Default branch</label>
        <p id="branch">
          <span class="badge bg-secondary">{{ repository.defaultBranch }}</span>
        </p>
      </div>

        <div class="repository-field">
          <label for="watchers">Watchers</label>
          <p id="watchers"> {{ repository.watchersCount }}</p>
        </div>

        <div class="repository-field">
          <label for="forks">Forks</label>
          <p id="forks"> {{ repository.forksCount }}</p>
        </div>

      <div class="repository-field">
        <label for="issues">Open Issues</label>
        <p id="issues"> {{ repository.openIssuesCount }}</p>
      </div>
      </div>
  </card>
</template>

<style lang="scss">
  .repository-field {
    min-height: 6rem;

    label {
      color: var(--font-color-dark);
      font-weight: 500;
    }
  }
</style>

<script>
  import Card from "./Card";

  export default {
    name: 'repository',
    components: {
      Card
    },
    props: {
      repository: { type: Object, required: true }
    }
  }
</script>