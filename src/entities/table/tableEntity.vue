<script lang="ts">
export default { name: 'table-entity' };
</script>

<script setup lang="ts">
import TableNavigation from './ui/navigation';
import { defineAsyncComponent, reactive, ref, computed } from 'vue';

const activeTab = ref('find');

const changeTab = (event: Event) => {
  const target = event.target as HTMLInputElement;
  activeTab.value = target.value;
};

const component = reactive({
  name: computed(() =>
    activeTab.value === 'find'
      ? defineAsyncComponent(() => import('./ui/body/index.vue'))
      : defineAsyncComponent(() => import('./ui/filter/tableFilter.vue'))
  ),
});
</script>
<template>
  <div class="table-wrapper">
    <table-navigation :activeTab="activeTab" @changeTab="changeTab" />
    <component :is="component.name" />
  </div>
</template>

<style lang="scss" scoped>
.table-wrapper {
  height: fit-content;
  margin: 10px 10px 0;
  border: 1px solid #ebebeb;
  width: 100%;
}
</style>
