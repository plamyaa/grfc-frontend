<script lang="ts">
export default { name: 'header-widget' };
</script>

<script setup lang="ts">
import { menuModel } from '../sideMenu';
import { useStore } from 'vuex';
const store = useStore();

const toggleMenu = () => store.commit(menuModel.mutations.toggleMenu);
</script>

<template>
  <header class="header">
    <button class="burger-btn" @click="toggleMenu">
      <i class="fa-solid fa-bars burger-icon"></i>
    </button>
    <div class="search-bar">
      <input
        type="search"
        name="seacrh"
        class="search-bar__input"
        placeholder="Поиск..."
      />
      <button name="search_button" type="submit" class="search-input__button">
        <i class="fa-solid fa-search search-bar__img"></i>
      </button>
    </div>
    <div>profile</div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  background-color: #120e22;
  height: 80px;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  .burger-btn {
    background: none;
    border: none;
  }
  .burger-icon {
    height: 30px;
    width: 30px;
    color: white;
    cursor: pointer;
  }
  .search-bar {
    display: flex;
    width: 600px;
    height: 40px;
    background-color: #ffffff;
    border-radius: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }

  .search-input__button {
    width: 27px;
    height: 27px;
    background-color: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
  }

  .search-bar__input {
    width: 533px;
    height: 28px;
    border: 0;
    font-size: 20px;
  }

  .search-bar__img {
    width: 18px;
  }
}
</style>
