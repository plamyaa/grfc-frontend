<script lang="ts">
export default { name: 'header-cell' };
</script>

<script setup lang="ts">
import { defineProps, computed, ref } from 'vue';
import { useStore } from 'vuex';
import { vOnClickOutside } from '@vueuse/components';

import { tableModel } from '@/entities/table/model';
import SortingDropdown from './sortingDropdown.vue';
import { IHeaderCell } from '@/entities/table/model/header/model';

const store = useStore();

interface Props {
  column: IHeaderCell;
}
const props = defineProps<Props>();

const showDropdown = ref(false);
const toggleSidedrop = async (event: Event) => (showDropdown.value = !showDropdown.value);
const closeModal = (event: Event) => (showDropdown.value = false);

const isSelected = computed(() => store.getters[tableModel.getters.isSelectedAllRows]);
const sortingState = computed(() => store.getters['table/header/useTableSorting']);

const sortingIcon = computed(() => {
  if (props.column.value === sortingState.value.key) {
    return sortingState.value.direction === true
      ? `<i class="fa-solid fa-sort-up"></i>`
      : `<i class="fa-solid fa-sort-down"></i>`;
  }
  return `<i class="fa-solid fa-sort"></i>`;
});

const setSortingKey = (key: string, direction: boolean) =>
  store.commit('table/header/setSorting', {
    key: key,
    direction: direction,
  });

const inputValue = ref('');
const setSearchFilter = (event: Event) => {
  let target = event.target as HTMLInputElement;
  switch (target.type) {
    case 'date': {
      const day = target.value.slice(8);
      const month = target.value.slice(5, 7);
      const year = target.value.slice(0, 4);
      store.commit('table/header/setFilter', {
        key: props.column.value,
        value: `${day}.${month}.${year}`,
      });
      break;
    }
    default:
      store.commit('table/header/setFilter', {
        key: props.column.value,
        value: target.value,
      });
  }
};

const selectRows = () => store.commit(tableModel.mutations.toggleAllRows);
</script>
<template>
  <th class="header__cell" :id="sortingIcon">
    <div class="header__cell-wrapper">
      <div v-if="column.value !== 'id'" class="header__buttons-wrapper">
        <span class="header__text"> {{ column.name }} </span>
        <button
          class="header__sort-button"
          :id="`header__button-${column.value}`"
          @click="toggleSidedrop"
          v-html="sortingIcon"
        ></button>
      </div>
      <input v-else type="checkbox" @click="selectRows" :checked="isSelected" />
    </div>
    <sorting-dropdown v-if="showDropdown" v-on-click-outside="closeModal">
      <div class="header__dropdown dropdown">
        <input
          v-model="inputValue"
          class="dropdown__input"
          :type="column.type"
          @input="setSearchFilter"
        />
        <div class="dropdown__buttons">
          <button class="dropdown__sort" @click.stop="setSortingKey(column.value, true)">
            <span class="dropdown__text">По возрастанию</span>
          </button>
          <button
            class="dropdown__sort"
            v-if="sortingState.key === column.value && sortingState.direction === true"
            @click="setSortingKey('', false)"
          >
            <i class="fa-solid fa-xmark dropdown__remove"></i>
          </button>
        </div>
        <div class="dropdown__buttons">
          <button class="dropdown__sort" @click="setSortingKey(column.value, false)">
            <span class="dropdown__text">По убыванию</span>
          </button>
          <button
            class="dropdown__sort"
            v-if="sortingState.key === column.value && sortingState.direction === false"
            @click="setSortingKey('', false)"
          >
            <i class="fa-solid fa-xmark dropdown__remove"></i>
          </button>
        </div>
      </div>
    </sorting-dropdown>
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
    padding: 0 2px;
    margin-top: 2px;
    border-radius: 4px;
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
  &__buttons {
    display: flex;
    justify-content: space-between;
    gap: 3px;
  }
}
</style>
