<template>
  <card title="Repositories" subtitle="List of top repositories for user X">
    <div class="list">
      <div v-for="(item, index) in repositories" v-bind:key="index" class="list-item">
        <div class="list-bullet">
          <p class="list-bullet-content square"></p>
        </div>
        <div class="list-content">
          <p class="list-content-title">
            <router-link v-bind:to="item.url">{{ item.title }}</router-link>
          </p>
          <p class="list-content-subtitle">{{ item.subtitle }}</p>
        </div>
      </div>
    </div>
  </card>
</template>

<style lang="scss">
  .list {
    display: flex;
    flex-direction: column;
  }

  .list-item {
    display: flex;
    flex-direction: row;
  }

  .list-bullet {
    align-self: center;
    padding-right: 1.4rem;

    .list-bullet-content {
      padding: 1.3rem;
      width: 1.3rem;
      height: 1.3rem;
      border-radius: .45rem;
    }

    .square {
      background-color: var(--font-color-dark);
    }
  }

  .list-content-title {
    margin: 0;
    color: var(--font-color-dark);
    font-weight: 500;
  }
</style>


<script>
  import Card from "./Card";

  export default {
    name: 'repository-list',
    components: {
      Card
    },
    props: {
      repositories: { type: Array, required: true }
    }
  }
</script>