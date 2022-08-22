<template>
  <v-alert border="left" color="indigo" dark>
    {{ text }}
  </v-alert>
</template>

<script>
export default {
  name: "ZAlert",
  props: {
    text: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
