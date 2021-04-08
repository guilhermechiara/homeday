<template>
  <div class="card">
    <div class="card-header">
      <p class="card-title">{{ title }}</p>
      <p class="card-subtitle">{{ subtitle }}</p>
    </div>
    <div class="card-body">
      <p class="card-content">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<style lang="scss">
$card-padding: 2.4rem;

.card {
  -webkit-box-shadow: 0 0 30px 0 #efefef;
  box-shadow: 0 0 30px 0 #efefef;
  border: 0;
  border-radius: .42rem;
  word-wrap: break-word;
}

.card-header {
  background-color: #fff;
  border: 0;
  padding: $card-padding $card-padding 0 $card-padding;
}

.card-title {
  color: var(--font-color-dark);
  font-size: 2.4rem;
  font-weight: 600;
}

.card-subtitle {
  color: var(--font-color-light);
  font-size: 1.5rem;
  font-weight: 500;
}

.card-body {
  padding: $card-padding $card-padding 0 $card-padding;
}
</style>

<script>
  export default {
    name: 'card',
    props: {
      title: { type: String, required: true },
      subtitle: { type: String }
    }
  }
</script>