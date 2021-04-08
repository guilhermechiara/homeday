<template>
  <card v-bind:title="repository.name" v-bind:subtitle="repository.language">
    <div class="repository">
      <label for="description">Description</label>
      <p id="description" class="repository-description"> {{ repository.name }}</p>

      <label for="branch">Current branch</label>
      <p id="branch" class="repository-description">
        <span class="badge bg-secondary">master</span>
      </p>
    </div>
  </card>
</template>

<style lang="scss">
  .repository {
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