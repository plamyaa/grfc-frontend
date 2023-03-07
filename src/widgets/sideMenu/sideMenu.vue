<script lang="ts">
export default { name: 'side-menu' };
</script>

<script setup lang="ts">
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { menuModel } from '.';
import { fakeMenu } from './fakeMenu';
import FoldersMenu from './foldersMenu.vue';
import { isTemplateElement } from '@babel/types';

export interface IFoldersChildren {
  name: string;
  children?: IFoldersChildren[];
}
const treeData = fakeMenu;
const store = useStore();
const searchFolder = ref('');

const menuState = computed(() => store.getters[menuModel.getters.useMenu]);

// поиск по меню
// const searchFolders = computed(() => {
//   let results = treeData.filter((item) =>
//     item.name.toLowerCase().includes(searchFolder.value.toLowerCase())
//   );
//   return results;
// });

const filteredMenu = computed(() => {
  if (!searchFolder.value) {
    return treeData;
  }
  const filteredItems: IFoldersChildren[] = [];
  filterMenu(treeData, filteredItems, searchFolder.value);
  console.log(filteredItems);
  return filteredItems;
});

function filterMenu(
  items: IFoldersChildren[],
  filteredItems: IFoldersChildren[],
  searchQuery: string
) {
  for (const item of items) {
    if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      filteredItems.push(item);
    }
    if (item.children) {
      const children: IFoldersChildren[] = [];
      filterMenu(item.children, children, searchQuery);
      if (children.length > 0) {
        filteredItems.push({
          ...item,
          children,
        });
      }
    }
  }
  return filteredItems;
}
</script>

<template>
  <menu class="menu-wrapper" :class="{ active: menuState }">
    <div class="menu-content">
      <div class="search-bar__container">
        <div class="search-bar">
          <input
            type="search"
            name="seacrh"
            class="search-bar__input"
            placeholder="Search..."
            v-model.lazy="searchFolder"
          />
          <button name="search_button" type="submit" class="search-input__button">
            <figure class="search-bar__figure">
              <i class="fa-solid fa-search search-bar__img"></i>
            </figure>
          </button>
        </div>
      </div>
      <li class="first-layer">
        <FoldersMenu
          class="item"
          v-for="(item, index) in filteredMenu"
          :key="index"
          :item="item"
        ></FoldersMenu>
      </li>
    </div>
  </menu>
</template>

<style lang="scss" scoped>
.menu-wrapper {
  display: none;
  z-index: 1000;
}
.menu-wrapper.active {
  display: block;
}
.menu-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 250px;
  padding: 10px 12px;
  background-color: #120e22;
}
.search-bar {
  display: flex;
  height: 35px;
  background-color: #ffffff;
  border-radius: 50px;
  padding: 0 8px;
  align-items: center;
  justify-content: space-between;
}

.search-input__button {
  width: 15px;
  height: 15px;
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
}

.search-bar__input {
  outline: 0;
  border: 0;
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 400;
  flex: 1;
}

.search-bar__img {
  width: 15px;
  height: 15px;
}

.first-layer {
  display: flex;
  color: #ffffff;
  align-items: center;
}

.menu-type {
  margin-right: 7px;
  width: 13px;
  height: 18px;
}

.menu-arrow {
  margin-left: auto;
  width: 15px;
  height: 12px;
}

.second-layer {
  margin-left: 12px;
  display: flex;
  color: #ffffff;
  align-items: center;
}

.third-layer {
  margin-left: 24px;
  display: flex;
  color: #ffffff;
  align-items: center;

  .menu-type {
    height: 21px;
    width: 25px;
  }
}
</style>
