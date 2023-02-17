<script lang="ts">
export default { name: 'header-cell' };
</script>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { useStore } from 'vuex';

import { tableModel } from '@/entities/table/model';

const store = useStore();

interface Props {
  value: string;
}
const props = defineProps<Props>();

const isSelected = computed(() => store.getters[tableModel.getters.isSelectedAllRows]);
const selectRows = () => store.commit(tableModel.mutations.toggleAllRows);
</script>
<template>
  <th class="header__cell">
    <div class="header__cell-wrapper">
      <span v-if="value !== 'id'" class="header__text"> {{ value }} </span>
      <input v-else type="checkbox" @click="selectRows" :checked="isSelected" />
    </div>
  </th>
</template>

<style scoped lang="scss">
.header {
  &__cell {
    height: 40px;
    border: 1px solid #ebebeb;
    background-color: #e8e8e8;
    justify-content: space-between;
    padding: 0 15px;
    position: relative;
  }
  &__cell-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 5px;
  }
  &__input {
    display: none;
  }
  &__text {
    float: left;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #7c7f9f;
  }
  &__buttons-wrapper {
    display: flex;
    gap: 3px;
    align-items: center;
  }
  &__sort-button,
  &__sort {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    width: 20px;
    height: 20px;
    transition: 0.2s;
    border-radius: 10em;
    &:hover {
      background-color: #dddddd;
    }
  }
}
.dropdown {
  z-index: 1000;
  position: absolute;
  border: 1px solid black;
  border-radius: 5px;
  top: calc(100% + 2px);
  right: 2px;
  display: flex;
  flex-direction: column;
  padding: 2px;
  background: #fff;
  font-weight: 400;
  font-size: 12px;
  &__search {
    height: 25px;
  }
  &__sort {
    height: 25px;
    display: flex;
    gap: 5px;
    align-items: center;
    border: 0;
    background: 0;
    cursor: pointer;
    &:hover {
      background: #e8e8e8;
    }
  }
  &__input {
    width: 100%;
  }
  &__text {
    white-space: nowrap;
    height: fit-content;
    color: #6d7095;
  }
  &__remove {
    margin-left: auto;
  }
}
</style>
