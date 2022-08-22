<template>
  <v-btn :outlined="outlined" :color="color">
    {{ name }}
  </v-btn>
</template>

<script>
export default {
  name: "ZButton",
  props: {
    name: {
      type: String,
      required: true,
    },
    color: String,
    outlined: Boolean,
  },
};
</script>
