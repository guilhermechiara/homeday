<template>
  <div class="alert alert-danger" v-if="errors && errors.messages && errors.messages.length > 0">
    <ul class="error-list">
      <li v-for="(item, index) in errors.messages" v-bind:key="index">
        {{ item }}
      </li>
    </ul>

  </div>
</template>

<style lang="scss">
  .error-list {
    margin-bottom: 0;
  }
</style>

<script>
  export default {
    name: 'error',
    props: {
      errors: { required: true }
    }
  }
</script>