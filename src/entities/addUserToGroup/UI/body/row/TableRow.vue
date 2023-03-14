<script lang="ts">
export default { name: 'table-body' };
</script>

<script setup lang="ts"></script>

<template>
  <div class="row-table">
    <div class="checked-block">
      <input type="checkbox" >
    </div>
    <div class="id-groups"><span>#</span></div>
    <div class="name-group-block"><span>Group 1</span></div>
    <div class="count-users-block"><span>8 пользователей</span></div>
  </div>
</template>

<style scoped>

.row-table {
  display: flex;
  height: 50px;
  border-left: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  color: #666666;
  font-size: 14px;
  border-bottom: 1px solid #e0e0e0;
}

.checked-block {
  display: flex;
  justify-content: center;
  flex-basis: 60px;
  border-right: 1px solid #e0e0e0;
}

.checked-block input {
  border: 2px solid #666666;
  min-height: 24px;
  min-width: 24px;
}

.id-groups {
  flex-basis: 85px;
  display: flex;
  border-right: 1px solid #e0e0e0;
  justify-content: center;
}

.id-groups span {
  align-self: center;
}

.name-group-block {
  flex-basis: 700px;
  padding-left: 20px;
  display: flex;
  border-right: 1px solid #e0e0e0;
}

.name-group-block span {
  align-self: center;
}

.count-users-block {
  display: flex;
  justify-content: center;
  flex-basis: 400px;
}

.count-users-block span {
  align-self: center;
}

</style>