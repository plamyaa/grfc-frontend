<script lang="ts">
export default { name: 'add-user' };
</script>

<script setup lang="ts">
import UserNav from '@/entities/addUserToGroup/UI/navigation/index.vue';
import TableUserHeader from '@/entities/addUserToGroup/UI/body/header/TableHeader.vue';
</script>

<template>
  <div class="table-users">
    <h2>Название группы</h2>
    <user-nav />
    <table-user-header />
  </div>
</template>

<style scoped>

.table-users {
  padding: 20px;
  width: 100%;
}

</style>