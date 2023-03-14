<script lang="ts">
export default { name: 'create-groups-users'};
</script>

<script setup lang="ts">
import SideMenu from '@/widgets/sideMenu/sideMenu.vue';
import ContentSideBar from '@/widgets/sideBar/ui/index.vue';
import HeaderWidget from '@/widgets/header/index.vue';
import AddUser from '@/entities/addUserToGroup/addUserToGroup.vue';
</script>

<template>
  <header-widget />
  <div class="home_content">
    <side-menu />
    <content-side-bar />
    <add-user />
  </div>
</template>

<style scoped>

.home_content {
  min-height: calc(100vh - 80px);
  display: flex;
}

</style>