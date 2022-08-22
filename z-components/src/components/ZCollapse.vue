<template>
  <v-expansion-panels v-model="panel">
    <v-expansion-panel v-for="item in items" :key="item.id">
      <v-expansion-panel-header disable-icon-rotate>
        <strong>{{ item.title }}</strong>
        <template v-slot:actions>
          <v-icon>
            {{ chooseIcon(item.id) }}
          </v-icon>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-textarea
          outlined
          no-resize
          hide-details
          height="70"
          label="Observações (opcional)"
          value=" "
        />
        <v-checkbox
          v-model="item.checkbox"
          hide-details
          label="Replicar para outros atendimentos"
        />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "ZCollapse",
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      panel: 0,
    };
  },
  methods: {
    chooseIcon(index) {
      return this.panel === index ? "mdi-minus" : "mdi-plus";
    },
  },
};
</script>

<style lang="scss" scoped>
.v-expansion-panel {
  margin-bottom: 16px;
}

.v-expansion-panel--active > .v-expansion-panel-header {
  min-height: 0;
}

.v-expansion-panel--active:not(:first-child),
.v-expansion-panel--active + .v-expansion-panel {
  margin-top: 0;
}

.v-expansion-panel-header {
  background-color: #f5f5f5;
}

.v-expansion-panel-content {
  padding-top: 20px;
}
</style>
