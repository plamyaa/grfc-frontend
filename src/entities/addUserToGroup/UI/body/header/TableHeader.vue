<script lang="ts">
export default { name: 'table-user-header' };
</script>

<script setup lang="ts"></script>

<template>
  <div class="name-column">
    <div class="empty-block"></div>
    <div class="code_group"><span>Код</span></div>
    <div class="name-group"><span>Название группы</span></div>
    <div class="count_users"><span>Показано</span></div>
  </div>
</template>

<style scoped>

.name-column {
  display: flex;
  height: 50px;
  color: #4c58ae;
}

.empty-block {
  flex-basis: 60px;
  background-color: #e0e0e0;
}

.code_group {
  display: flex;
  justify-content: center;
  flex-basis: 85px;
  background-color: #e0e0e0;
}

.code_group span, .name-group span, .count_users span {
  align-self: center;
}

.code_group span:after {
  position: relative;
  display: inline-block;
  content: '';
  background: url('./img/Лупа.svg') no-repeat;
  min-width: 13px;
  min-height: 13px;
  background-size: contain;
  top: 2px;
  left: 5px;
}

.name-group span:after, .count_users span:after {
  position: relative;
  display: inline-block;
  content: '';
  background: url('./img/3.svg') no-repeat;
  min-width: 10px;
  min-height: 13px;
  background-size: contain;
  top: 2px;
  left: 5px;
}

.name-group {
  display: flex;
  flex-basis: 700px;
  background-color: #e0e0e0;
}

.name-group span {
  margin-left: 20px;
}

.count_users {
  display: flex;
  flex-basis: 400px;
  background-color: #e0e0e0;
  justify-content: center;
}


</style>