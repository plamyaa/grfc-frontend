<script lang="ts">
export default { name: 'table-groups'};
</script>

<script setup lang="ts">
import TableNav from '@/entities/tableGroupsUsers/UI/navigation/index.vue';
import TableHeader from '@/entities/tableGroupsUsers/UI/body/header/TableHeader.vue';
import TableRow from '@/entities/tableGroupsUsers/UI/body/row/TableRow.vue';

</script>

<template>
  <div class="groups-wrapper">
    <h2>Группы пользователей</h2>
    <table-nav />
    <table-header />
    <table-row />
  </div>
</template>

<style scoped>

.groups-wrapper {
  padding: 20px;
  width: 100%;
}

</style>