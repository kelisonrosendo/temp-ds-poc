<template>
  <v-app>
    <v-container>
      <z-button name="meu botão" color="error" class="mb-10" />
      <z-alert
        is-dark
        text="texto bunito do alert"
        color="indigo"
        class="mb-10"
      />
      <z-collapse :items="expansionList" />
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
  data() {
    return {
      expansionList: [
        {
          id: 0,
          title:
            "Cont. 1 | Tipo: AIH | Beneficiário: 0000000000 - Fulano de Tal",
          checkbox: true,
        },
        {
          id: 1,
          title:
            "Cont. 2 | Tipo: AIH | Beneficiário: 0000000000 - Fulano de Tal",
          checkbox: true,
        },
        {
          id: 2,
          title:
            "Cont. 3 | Tipo: AIH | Beneficiário: 0000000000 - Fulano de Tal",
          checkbox: true,
        },
      ],
    };
  },
};
</script>
