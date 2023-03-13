<script lang="ts">
export default { name: 'create-group' };
</script>

<script setup lang="ts">
import GroupInfo from '@/entities/createGroup/UI/inputData/groupInfo/groupInfo.vue';
import UsersGroup from '@/entities/createGroup/UI/inputData/usersGroup/usersGroup.vue';
import AddGroup from '@/entities/createGroup/UI/addGroup/addGroup.vue';

</script>

<template>
  <div class="wrapper">
    <h2>Создание группы</h2>
    <form class="form-create-group">
      <div class="input-data">
        <group-info />
        <users-group />
      </div>
      <add-group />
    </form>
  </div>
</template>

<style scoped>

.wrapper {
  padding: 20px;
  width: 100%;
}

.input-data {
  display: flex;
  margin-top: 60px;
}

</style>