<script lang="ts">
export default { name: 'ContentSideBar' };
</script>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { menuModel } from '../../sideMenu';
import { vOnClickOutside } from '@vueuse/components';

import SideDropdown from './sideDropdown.vue';

const store = useStore();

const buttons = ref([
  { id: 1, name: 'fa-solid fa-magnifying-glass' },
  { id: 2, name: 'fa-regular fa-folder' },
  { id: 3, name: 'fa-regular fa-file' },
]);

const checked = ref('');

const openSidedrop = (event: Event) => {
  const target = event.target as HTMLInputElement;
  checked.value = target.id;
};

const closeModal = (event: Event) => {
  checked.value = '';
};

const menuState = computed(() => store.getters[menuModel.getters.useMenu]);
</script>

<template>
  <form class="side-bar" :class="{ hidden: menuState }">
    <label
      v-for="{ id, name } in buttons"
      :key="id"
      :for="name"
      class="side-bar__button"
      :class="{ active: checked === name }"
    >
      <input
        v-model="checked"
        type="radio"
        class="checkbox"
        :id="name"
        @click="openSidedrop"
      />
      <i class="side-bar__icon" :class="name"></i>
    </label>
    <SideDropdown v-if="checked" v-on-click-outside="closeModal">
      <div class="first-layer">Форма 1.1</div>
      <div class="first-layer">Форма 1.1</div>
      <div class="first-layer">Форма 1.1</div>
      <div class="first-layer">Форма 1.1</div>
      <div class="first-layer">Форма 1.1</div>
    </SideDropdown>
  </form>
</template>

<style lang="scss" scoped>
.side-bar {
  &.hidden {
    display: none;
  }
  width: 60px;
  background-color: #120E22;
  display: flex;
  flex-direction: column;
  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 40px;
    background: none;
    border: 0;
    color: #ffffff;
    cursor: pointer;
  }
}
.checkbox {
  width: 100%;
  height: 100%;
  display: none;
}
.active {
  background-color: #93adf2;
}
.side-dropdown {
  width: 184px;
  height: 210px;
  background-color: #93adf2;
  position: absolute;
  display: flex;
  left: 55px;
  flex-direction: column;
  z-index: 1000;
  //top: 80px;
}
</style>
