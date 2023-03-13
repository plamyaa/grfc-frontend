<script lang="ts">
export default {name: 'group-info'};
</script>

<script setup lang="ts"></script>

<template>
  <div class="group-info">
    <div class="input-name-group">
      <label class="label-relative" for="nameGroup">Название группы</label>
      <input id="nameGroup" type="text" placeholder="Введите название группы">
    </div>
    <div  class="description">
      <label for="desc">Описание</label>
      <textarea id="desc" placeholder="Описание..." />
    </div>
  </div>
</template>

<style scoped>

.group-info {
  width: 46%;
}

.label-relative {
  position: absolute;
  top: 165px;
}

.input-name-group input {
  padding: 5px 10px;
  border: 1px solid #e0e0e0;
}

.input-name-group {
  display: flex;
  flex-direction: column;
}

.description {
  display: flex;
  flex-direction: column;
  margin-top: 35px;
}

.description textarea {
  height: 170px;
  margin-top: 5px;
  padding: 5px;
  border: 1px solid #e0e0e0;
}

</style>