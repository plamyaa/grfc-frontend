<script lang="ts">
export default { name: 'table-row' };
</script>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { ITableRow } from '@/entities/table/model/model';
import { useStore } from 'vuex';
import { tableModel } from '@/entities/table/model';

import TableCell from './cell/tableCell.vue';

const store = useStore();

interface Props {
  row: ITableRow;
}
const props = defineProps<Props>();

const isRowSelected = computed(() =>
  store.getters[tableModel.getters.isSelectedRow](props.row.id)
);
</script>
<template>
  <tr class="body__row">
    <table-cell
      v-for="(value, key, index) in row"
      :key="index"
      :value="value"
      :cellKey="key"
      :selected="isRowSelected"
    />
  </tr>
</template>
