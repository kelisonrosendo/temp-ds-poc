<template>
  <v-btn outlined color="error">
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
  },
};
</script>

<style lang="scss" scoped></style>
