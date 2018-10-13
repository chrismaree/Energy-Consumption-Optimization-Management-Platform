<template>
  <component :is="tag" class="badge" :class="`badge-${type}`">
    <slot></slot><md-button style="margin:0px; padding:0px">X</md-button>

  </component>
</template>
<script>
export default {
  name: "badge",
  props: {
    tag: {
      type: String,
      default: "span"
    },
    type: {
      type: String,
      default: "default",
      validator: value => {
        let acceptedValues = [
          "primary",
          "info",
          "success",
          "warning",
          "danger",
          "rose",
          "default"
        ];
        return acceptedValues.indexOf(value) !== -1;
      }
    }
  }
};
</script>
<style>
</style>
