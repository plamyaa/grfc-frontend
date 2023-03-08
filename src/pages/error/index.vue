<script lang="ts">
export default { name: 'errorPages' };
</script>

<script setup lang="ts">
import HeaderWidget from '@/widgets/header';
import SideMenu from '@/widgets/sideMenu';
import SideBar from '@/widgets/sideBar';
</script>

<template>
  <div class="page main__container">
    <header-widget />
    <div class="home__content">
      <side-menu />
      <side-bar />
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  background: #211a3f;
}
.home__content {
  min-height: calc(100vh - 80px);
  display: flex;
}
</style>
