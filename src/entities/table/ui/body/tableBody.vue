<script lang="ts">
export default { name: 'table-body' };
</script>

<script setup lang="ts">
import TableHeader from './header/headerRow.vue';
import TableRow from './row/tableRow.vue';
import { computed } from 'vue';
import { tableModel } from '../../model';
import { useStore } from 'vuex';

const store = useStore();
const tableState = computed(() => store.getters[tableModel.getters.useTable]);
</script>
<template>
  <table class="table">
    <table-header />
    <tbody class="table__body body">
      <table-row v-for="row in tableState" :key="row.id" :row="row" />
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
.table {
  width: 100%;
  padding: 0;
  margin: 0;
  border-collapse: collapse;
}
</style>
