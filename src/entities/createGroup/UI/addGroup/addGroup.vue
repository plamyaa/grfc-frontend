<script lang="ts">
export default { name: 'add-group'};
</script>

<script setup lang="ts"></script>

<template>
  <div class="create-group">
    <button class="create">Создать</button>
    <button class="cancel">или <span>отменить</span></button>
  </div>
</template>

<style scoped>

.create {
  background-color: #ff9333;
  color: white;
  min-height: 45px;
  min-width: 200px;
  border: none;
  border-radius: 5px;
  margin-top: 35px;
}

.cancel {
  background-color: white;
  border: none;
  margin-left: 20px;
}

.cancel span {
  color: #7d8cc1;
}

</style>