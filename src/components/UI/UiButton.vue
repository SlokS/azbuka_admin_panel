<template>
  <button class="btn" :class="classButton" v-on:click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ui-button',
  props: {
    classButton: String,
  },
};
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  cursor: pointer;
}
</style>
