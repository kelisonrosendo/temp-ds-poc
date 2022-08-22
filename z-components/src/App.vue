<template>
  <v-app>
    <v-container>
      <z-button name="meu botão" class="mb-10" />
      <z-alert text="texto bunito do alert" class="mb-10" />
      <z-collapse />
    </v-container>
  </v-app>
</template>

<script>
import ZButton from "./components/ZButton";
import ZAlert from "./components/ZAlert.vue";
import ZCollapse from "./components/ZCollapse.vue";

export default {
  name: "App",
  components: { ZButton, ZAlert, ZCollapse },
};
</script>
