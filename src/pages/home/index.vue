<script lang="ts">
export default { name: 'home-page' };
</script>

<script setup lang="ts">
import HeaderWidget from '@/widgets/header';
import TableEntity from '@/entities/table/tableEntity.vue';
import SideMenu from '@/widgets/sideMenu';
import SideBar from '@/widgets/sideBar';
</script>

<template>
  <div class="page">
    <header-widget />
    <div class="home__content">
      <side-menu />
      <side-bar />
      <table-entity />
    </div>
  </div>
</template>

<style scoped lang="scss">
.home__content {
  min-height: calc(100vh - 80px);
  display: flex;
}
</style>
