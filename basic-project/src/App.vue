<template>
  <div id="app">
    <z-button name="texto do botão" />
    <z-alert text="esse é o texto do meu alert bunito" />
    <z-collapse />
  </div>
</template>

<script>
import { ZButton, ZAlert, ZCollapse } from "z-components/z-components.common";

export default {
  name: "App",
  components: {
    ZButton,
    ZAlert,
    ZCollapse,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
