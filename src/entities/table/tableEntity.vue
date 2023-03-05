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
  <div class="table-page">
    <div class="table-wrapper">
      <table-navigation :activeTab="activeTab" @changeTab="changeTab" />
      <component :is="component.name" />
    </div>
    <div class="pagination" v-if="activeTab === 'find'">
      <button class="back-btn" :disabled="page === 0" @click="setPage(page - 1)">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button class="page" v-if="page !== 0" @click="setPage(page - 1)">
        {{ page }}
      </button>
      <button class="page page-current">{{ page + 1 }}</button>
      <button class="page" v-if="page !== 3" @click="setPage(page + 1)">
        {{ page + 2 }}
      </button>
      <button class="next-btn" :disabled="page === 3" @click="setPage(page + 1)">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table-page {
  width: 100%;
  display: grid;
  margin: 10px 10px 0;
}
.table-wrapper {
  height: fit-content;
  border: 1px solid #ebebeb;
  width: 100%;
  position: relative;
}
.pagination {
  margin: 10px 0;
  display: flex;
  justify-content: end;
  gap: 10px;
}
.back-btn,
.next-btn {
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 100%;
  background: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #ebebeb;
  }
}
.next-btn {
}
.page {
  line-height: 30px;
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 100%;
  background: none;
  cursor: pointer;
  &-current {
    background: #f6f6f6;
  }
  &:hover {
    background-color: #ebebeb;
  }
}
</style>
