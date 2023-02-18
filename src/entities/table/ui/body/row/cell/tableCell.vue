<script lang="ts">
export default { name: 'table-cell' };
</script>
<script setup lang="ts">
import { defineProps } from 'vue';
import { tableModel } from '@/entities/table/model';
import { useStore } from 'vuex';

const store = useStore();

interface Props {
  value: string | number;
  cellKey: string;
  selected: boolean;
}
const props = defineProps<Props>();

const selectRow = () => store.commit(tableModel.mutations.toggleRow, props.value);
</script>
<template>
  <td class="table__cell" :class="{ selected: selected }">
    <span v-if="cellKey !== 'id'">{{ value }}</span>
    <input v-else type="checkbox" @click="selectRow" :checked="selected" />
  </td>
</template>

<style lang="scss" scoped>
.table__cell {
  height: 40px;
  border: 1px solid #ebebeb;
  border-bottom: 0;
  text-align: center;
}
.selected {
  background: #f2f2f2;
}
</style>
