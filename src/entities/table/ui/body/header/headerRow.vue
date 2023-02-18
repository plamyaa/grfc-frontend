<script lang="ts">
export default { name: 'table-header' };
</script>

<script setup lang="ts">
import HeaderCell from './cell/headerCell.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const columns = computed(() => store.getters['table/header/selectedColumns']);
</script>
<template>
  <thead class="table__header header">
    <tr class="header__row">
      <header-cell :column="{ value: 'id' }" />
      <header-cell v-for="(column, index) in columns" :key="index" :column="column" />
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
