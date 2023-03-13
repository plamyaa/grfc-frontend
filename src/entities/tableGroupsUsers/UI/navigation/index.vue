<script lang="ts">
export default { name: 'table-nav' };
</script>

<script setup lang="ts"></script>

<template>
  <div class="table-nav">
    <div class="find-btn">
      <button class="btn">Найдено ()</button>
    </div>
    <button class="filter btn">Фильтры</button>
    <from class="search-wrapper">
      <div class="search-block">
        <input class="search-input" type="search" placeholder="Поиск...">
        <span class="btn-search"></span>
      </div>
    </from>
    <span class="download"></span>
    <button class="btn add_group"><span>добавить группу</span></button>
  </div>
</template>

<style scoped>

.table-nav {
  display: flex;
  min-height: 46px;
  margin-top: 10px;
}

.find-btn {
  background-color: #ff9333;
  padding-top: 10px;
  box-shadow: 2px 0 2px 0 #666666;
  flex-basis: 192px;
}

.filter {
  flex-basis: 192px;
  z-index: -1;
}

.search-wrapper {
  display: flex;
  align-items: center;
  flex-basis: 595px;
}

.search-block {
  display: flex;
  align-items: center;
  border-right: 1px solid #e0e0e0;
  width: 100%;
}

.search-input {
  border: none;
  height: 30px;
  font-size: 16px;
  margin-left: 5px;
  flex-basis: 537px;
}

.btn-search {
  display: inline-block;
  background: url('./img/Поиск.svg') no-repeat;
  min-width: 16px;
  min-height: 16px;
  background-size: contain;
  margin-right: 30px;
  margin-left: 5px;
}

.download {
  display: inline-block;
  background: url('./img/Vector8.svg') no-repeat;
  min-width: 16px;
  min-height: 16px;
  background-size: contain;
  align-self: center;
  margin: 0 30px;
}

.find-btn button {
  height: 100%;
  background-color: #e0e0e0;
  color: black;
  z-index: 6;
}

.btn {
  border: none;
  width: 100%;
  background-color: #c2c2c2;
  color: #666666;
  font-size: 16px;
}

.add_group {
  background-color: #ff9333;
  flex-basis: 192px;
}

.add_group span:before {
  position: relative;
  display: inline-block;
  content: '';
  width: 20px;
  height: 20px;
  background: url('./img/add1.svg') no-repeat;
  background-size: contain;
  top: 6px;
  right: 5px;
}


</style>