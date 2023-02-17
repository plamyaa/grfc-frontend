<script lang="ts">
export default { name: 'table-navigation' };
</script>
<script setup lang="ts">
import { ref, defineProps, computed } from 'vue';
import { useStore } from 'vuex';
import { tableModel } from '../../model';

import modalWindow from '@/shared/components/modalWindow.vue';

const store = useStore();

interface Props {
  activeTab: string;
}
const props = defineProps<Props>();

const showSettings = ref(false);

const tableState = computed(() => store.getters[tableModel.getters.useTable]);
</script>
<template>
  <div class="table-nav">
    <label class="find-btn">
      <input
        class="find-btn__input"
        type="radio"
        value="find"
        :checked="activeTab === 'find'"
        @change="(value) => $emit('changeTab', value)"
      />
      <span class="find-btn__text">Найдено ({{ tableState.length }})</span>
    </label>
    <label class="filter-btn">
      <input
        class="filter-btn__input"
        type="radio"
        value="filter"
        :checked="activeTab === 'filter'"
        @change="(value) => $emit('changeTab', value)"
      />
      <span class="filter-btn__text">Фильтры</span>
    </label>
    <form class="table-nav__form">
      <input class="table-nav__input" type="text" placeholder="Поиск..." />
    </form>
    <div class="table-nav__buttons">
      <button>
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
      <button>
        <i class="fa-solid fa-plus"></i>
      </button>
      <span class="table-nav__vertical-line"></span>
      <button @click="showSettings = true">
        <i class="fa-solid fa-gear"></i>
      </button>
      <button>
        <i class="fa-solid fa-download"></i>
      </button>
    </div>
    <modal-window v-if="showSettings" @close="showSettings = false" />
  </div>
</template>

<style lang="scss" scoped>
.table-nav {
  display: flex;
  width: 100%;
  height: 40px;
  padding-right: 10px;
  &__form {
    width: 100%;
    height: 100%;
  }
  &__input {
    width: 100%;
    height: 100%;
    padding: 0 20px;
    border: 0;
  }
  &__buttons {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  &__buttons > * {
    cursor: pointer;
    height: 17px;
    background-color: transparent;
    width: 17px;
    border: 0;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &__vertical-line {
    border-left: 1px solid #ebebeb;
    width: 0;
    height: 30px;
  }
}
.find-btn,
.filter-btn {
  display: flex;
  position: relative;
  cursor: pointer;
  max-width: 150px;
  width: 100%;
  border: 0;
  &__input {
    width: 0;
    height: 0;
    opacity: 0;
  }
  &__text {
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 38px;
    background-color: #c2c2c2;
    color: #3f3f3f;
  }
}
.find-btn__input:checked + .find-btn__text {
  background-color: #e2e2e2;
  color: #000000;
}
.filter-btn__input:checked + .filter-btn__text {
  background-color: #e2e2e2;
  color: #000000;
}
</style>
