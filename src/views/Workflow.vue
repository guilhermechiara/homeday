<template>
  <div class="workflow">
    <error v-bind:errors="errors"></error>
    <workflow-form v-on:submit="onSubmit"></workflow-form>
  </div>
</template>

<script>
  import store from '@/store';
  import WorkflowForm from "@/components/WorkflowForm";
  import Error from "@/components/Error";

  import { FETCH_USER } from "@/store/actions";

  export default {
    name: 'view-workflow',
    components: {
      WorkflowForm,
      Error
    },

    data() {
      return {
        errors: null
      }
    },

    methods: {
      async onSubmit(form) {
        try {
          const user = await store.dispatch(FETCH_USER, form.username);

          if (user) {
            await this.$router.push(`/repository/${user.login}`);
          }
        } catch(err) {
          if (err.statusCode === 404) {
            this.errors = {
              messages: [`Failed to find resource with name ${form.username}`]
            }
          } else {
            this.errors = {
              messages: [`Oops, something wrong happened! Please, try again.`]
            }
          }
        }
      },
    },
  }
</script>