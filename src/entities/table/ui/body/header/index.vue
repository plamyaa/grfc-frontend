<script lang="ts">
export default { name: 'table-header' };
</script>

<script setup lang="ts">
import HeaderCell from './cell/index.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const columns = computed(() => store.getters['table/header/selectedColumns']);
</script>
<template>
  <thead class="table__header header">
    <tr class="header__row">
      <header-cell :value="''" />
      <header-cell v-for="(column, index) in columns" :key="index" :value="column.name" />
    </tr>
  </thead>
</template>

<style scoped lang="scss">
.header__cell {
  border: 1px solid #ebebeb;
  background-color: #e8e8e8;
  position: relative;
  padding: 0 15px;
}
</style>
