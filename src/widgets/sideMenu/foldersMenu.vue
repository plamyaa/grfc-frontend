<script lang="ts">
export default { name: 'folders-menu' };
</script>
<script setup lang="ts">
import { computed, ref, reactive, defineProps } from 'vue';

interface Props {
  name: string;
  children: any;
}
const props = defineProps<{ item: Props }>();

let isOpen = ref(false);
const toggle = () => {
  if (isFolder.value) {
    isOpen.value = !isOpen.value;
  }
};
const sortingIcon = computed(() => {
  return isOpen.value === true
    ? `<i class="menu-arrow fa-solid fa-chevron-up fa-sm"></i>`
    : `<i class="menu-arrow fa-solid fa-chevron-down fa-sm"></i>`;
});

const isFolder = computed(() => {
  return props.item.children && props.item.children.length;
});
</script>

<template>
  <div class="menu-content">
    <li class="menu-folders">
      <div class="first-layer-text" @click="toggle">
        <div>
          <i class="menu-type fa-solid fa-folder" v-if="isFolder"></i>
          <i class="menu-type fa-solid fa-file" v-else></i>
          {{ item.name }}
        </div>
        <span v-html="sortingIcon" v-if="isFolder"></span>
      </div>
      <ul v-show="isOpen" v-if="isFolder">
        <folders-menu
          class="item"
          v-for="(child, index) in item.children"
          :key="index"
          :item="child"
        ></folders-menu>
      </ul>
    </li>
  </div>
</template>

<style lang="scss" scoped>
.menu-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 12px;
  background-color: #000855;
}
.menu-type {
  margin-right: 7px;
  width: 13px;
  height: 18px;
}
.first-layer-text {
  display: flex;
  color: #ffffff;
  align-items: center;
  justify-content: space-between;
}

.fa-folder {
  width: 15px;
  height: 20px;
}
.menu-folders {
  list-style-type: none;
}

.menu-arrow {
  margin-left: auto;
  width: 15px;
  height: 12px;
}

.second-layer {
  margin-left: 12px;
  display: flex;
  color: #ffffff;
  align-items: center;
}

.third-layer {
  margin-left: 24px;
  display: flex;
  color: #ffffff;
  align-items: center;

  .menu-type {
    height: 21px;
    width: 25px;
  }
}
</style>
