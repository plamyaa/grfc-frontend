<script lang="ts">
export default { name: 'table-entity' };
</script>

<script setup lang="ts">
import TableNavigation from './ui/navigation';
import { defineAsyncComponent, reactive, ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const activeTab = ref('find');

const changeTab = (event: Event) => {
  const target = event.target as HTMLInputElement;
  activeTab.value = target.value;
};

const component = reactive({
  name: computed(() =>
    activeTab.value === 'find'
      ? defineAsyncComponent(() => import('./ui/body/tableBody.vue'))
      : defineAsyncComponent(() => import('./ui/filter/tableFilter.vue'))
  ),
});

const setPage = (page: number) => store.commit('table/settings/setPage', page);
const page = computed(() => store.getters['table/settings/paginationPage']);
</script>
<template>
  <div class="table-wrapper">
    <table-navigation :activeTab="activeTab" @changeTab="changeTab" />
    <component :is="component.name" />
    <div class="pagination">
      <button :disabled="page === 0" @click="setPage(page - 1)">Назад</button>
      <button :disabled="page === 3" @click="setPage(page + 1)">Вперед</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table-wrapper {
  height: fit-content;
  margin: 10px 10px 0;
  border: 1px solid #ebebeb;
  width: 100%;
  position: relative;
}
.pagination {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}
</style>
