<script lang="ts">
export default { name: 'error-404' };
</script>

<script setup lang="ts">
import errorPages from '@/pages/error/index';
</script>

<template>
  <div class="error">
    <error-pages
      ><div class="error-wrapper">
        <div class="error-title">Ошибка 404</div>
        <div class="error-subtitle">
          Страница, которую вы запрашиваете, не существует. Возможно она устарела, была
          удалена, или был введен неверный адрес в адресной строке.
        </div>
        <router-link to="/" class="error-button">
          <button class="btn-back">Перейти на главную</button>
        </router-link>
      </div>
    </error-pages>
  </div>
</template>

<style scoped lang="scss">
.error {
  &-wrapper {
    display: grid;
    justify-content: center;
    align-content: center;
    justify-items: center;
    max-width: 812px;
    margin: auto;
  }
  &-title {
    color: #fff;
    font-size: 56px;
  }
  &-subtitle {
    font-size: 22px;
    font-weight: 300;
    text-align: center;
    color: #fff;
    padding: 50px 0;
  }
  .btn-back {
    background-color: #fff;
    border: 0;
    border-radius: 40px;
    cursor: pointer;
    text-align: center;
    width: 212px;
    height: 60px;
    font-size: 18px;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
