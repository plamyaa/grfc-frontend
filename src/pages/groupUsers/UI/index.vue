<script lang="ts">
export default { name: 'group-users' };
</script>

<script setup lang="ts">
import HeaderWidget from '@/widgets/header';
import SideMenu from '@/widgets/sideMenu/sideMenu';
import ContentSideBar from '@/widgets/sideBar/ui';
import TableGroups from '@/entities/tableGroupsUsers/tableGroupsUsers.vue';
</script>

<template>
  <div>
    <header-widget/>
    <div class="home_content">
      <side-menu/>
      <content-side-bar/>
      <table-groups />
    </div>
  </div>

</template>

<style scoped lang="scss">

.home_content {
  min-height: calc(100vh - 80px);
  display: flex;
}

</style>