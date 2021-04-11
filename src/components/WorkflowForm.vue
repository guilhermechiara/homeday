<template>
  <card title="Workflow" subtitle="Select an user to show top repositories">
    <form id="workflow-form" class="form" @submit.prevent="onSubmit(formContent)">
      <div class="form-component">
        <label for="username">Username</label>
        <input
            type="text"
            class="form-item"
            id="username"
            placeholder="Enter username"
            v-model="formContent.username"
            required
        >
      </div>
      <div class="form-component">
        <label for="userEmail">Email</label>
        <input
            type="email"
            class="form-item"
            id="userEmail"
            placeholder="Enter email"
            v-model="formContent.email"
            required
        >
      </div>
      <div class="form-component">
        <label class="form-check-label" for="agreement">
          <input
              type="checkbox"
              id="agreement"
              v-model="formContent.agreement"
              required
          > Do you agree with the terms?
        </label>
      </div>
      <div class="form-footer form-actions-right">
        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="submit" class="btn btn-light">Cancel</button>
      </div>
    </form>

    <div class="mt-5">
      <error v-bind:errors="errors"></error>
    </div>
  </card>
</template>

<style lang="scss">
  .form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .form-component {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    color: var(--font-color-dark);
    font-weight: 500;

    label {
      margin-bottom: .45rem;
    }

    input[type=text], input[type=email] {
      width: 100%;
      padding: .8rem;
      border-radius: .25rem;
      border: 1px solid var(--font-color-primary);
      transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      color: var(--font-color-primary);

      &:focus, &:hover {
        outline: none;
        border-color: var(--font-color-dark);
      }
    }
  }

  .form-footer {
    display: flex;
    flex-direction: row;

    button {
      font-size: 1.45rem;
    }
  }

  .form-actions-right {
    align-self: flex-end;

    button:not(:last-of-type) {
      margin-right: .8rem;
    }
  }
</style>

<script>
  import Card from "./Card";
  import Error from "@/components/Error";

  export default {
    name: 'workflow-form',
    components: {
      Error,
      Card
    },

    data() {
      return {
        formContent: {
          username: 'guilhermechiara',
          email: 'chiara.guilherme@gmail.com',
          agreement: true
        },
        errors: null
      }
    },

    methods: {
      onSubmit(formContent) {
        if (this.isValid(formContent)) {
          this.$emit('submit', formContent);
        }
      },

      isValid(formContent) {
        this.errors = {
          messages: []
        };

        if (!formContent.username) {
          this.errors.messages.push('You must provide an username');
        }

        if (!formContent.email || !this.isValidEmail(formContent.email)) {
          this.errors.messages.push('You must provide a valid email');
        }

        if (!formContent.agreement) {
          this.errors.messages.push('You must agree with the terms');
        }

        return this.errors.messages.length <= 0;
      },

      isValidEmail(email) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
      },
    }
  }
</script>