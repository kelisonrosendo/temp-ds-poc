<template>
  <v-alert :border="border" :color="color" :dark="isDark">
    {{ text }}
  </v-alert>
</template>

<script>
export default {
  name: "ZAlert",
  props: {
    text: {
      type: String,
      required: true,
    },
    border: {
      type: String,
      default: "left",
    },
    color: String,
    isDark: Boolean,
  },
};
</script>

<style lang="scss" scoped></style>
