<script lang="ts">
export default { name: 'users-group'};
</script>

<script setup lang="ts"></script>

<template>
  <div class="users-group">
    <p>Добавить пользователя в группу</p>
    <div class="users">
      <span class="avatar"></span>
      <span class="name-user">Синицин Александр</span>
    </div>
    <button class="add-user"><span>Добавить нового пользователя</span></button>
  </div>
</template>

<style scoped>

.users {
  display: flex;
  align-items: center;
  padding: 5px 0 5px 5px;
  margin: 15px 40px 0 40px;
  border: 1px solid #e0e0e0;
}

.add-user {
  margin-left: 45px;
  margin-top: 15px;
  background-color: white;
  border: none;
  color: #2c42b6;
}

.add-user:hover, .cancel span:hover {
  text-decoration: underline;
  cursor: pointer;
}

.add-user span:before {
  display: inline-block;
  position: relative;
  content: '';
  background: url('./img/add-button.png') no-repeat;
  background-size: contain;
  min-height: 20px;
  min-width: 20px;
  top: 5px;
  right: 5px;
}

.avatar {
  background: url('./img/Фото.png') no-repeat;
  background-size: contain;
  min-width: 40px;
  min-height: 40px;
}

.name-user {
  margin-left: 20px;
}

.users-group {
  width: 51%;
  margin-left: 40px;
  box-shadow: 1px 2px 2px 2px #e0e0e0;
}

.users-group p {
  background-color: #e0e0e0;
  min-height: 30px;
  color: #666666;
  display: flex;
  align-items: center;
  padding-left: 40px;
}

</style>