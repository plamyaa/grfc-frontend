<script lang="ts">
export default { name: 'table-settings' };
</script>
<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

import modalWindow from '@/shared/components/modalWindow.vue';

const store = useStore();

const unselectedColumns = computed(() => store.getters['table/header/unselectedColumns']);
const unselectColumn = (id: number) => store.commit('table/header/unselectColumn', id);

const selectedColumns = computed(() => store.getters['table/header/selectedColumns']);
const selectColumn = (id: number) => store.commit('table/header/selectColumn', id);

const paginationCurrentValue = computed(
  () => store.getters['table/settings/paginationCurrentValue']
);
const paginationValues = computed(() => store.getters['table/settings/paginationValues']);
const setPagination = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  store.commit('table/settings/setPagination', +target.value);
};
</script>
<template>
  <modal-window @close="$emit('close')">
    <div class="modal__header-wrapper">
      <button class="modal__exit" @click="$emit('close')">
        <i class="fa-solid fa-xmark modal__exit-btn"></i>
      </button>
      <h3 class="modal__header">Настройка таблицы</h3>
    </div>
    <div class="modal__content">
      <div class="modal__available-columns available">
        <span> Доступные столбцы: </span>
        <div class="available__rows">
          <button
            class="available__row"
            v-for="{ id, name } in unselectedColumns"
            :key="id"
            @click="selectColumn(id)"
          >
            {{ name }}
            <span class="arrow right"></span>
          </button>
        </div>
      </div>
      <div class="modal__choosen-columns choosen">
        <span> Выбранные столбцы: </span>
        <div class="choosen__rows">
          <button
            class="choosen__row"
            v-for="{ id, name } in selectedColumns"
            :key="id"
            @click="unselectColumn(id)"
          >
            {{ name }}
            <span class="arrow left"></span>
          </button>
        </div>
      </div>
    </div>
    <form class="modal__selectors selectors">
      <label for="selectors__rows">
        <span>Строк в таблице:</span>
        <select
          class="selectors__rows selectors_btn"
          id="selectors__rows"
          @change="setPagination($event)"
        >
          <option
            v-for="(number, index) in paginationValues"
            :key="index"
            :selected="paginationCurrentValue === number"
          >
            {{ number }}
          </option>
        </select>
      </label>
      <label for="selectors__font-size">
        <span>Размер шрифта:</span>
        <select class="selectors__font-size selectors_btn" id="selectors__font-size">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
      <label for="selectors__padding">
        <span>Отступ:</span>
        <select class="selectors__padding selectors_btn" id="selectors__padding">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
    </form>
  </modal-window>
</template>

<style scoped lang="scss">
.modal__header {
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  margin-top: 0;
  font-style: normal;
  color: #373951;
}

.modal__exit-btn {
  width: 18px;
  height: 18px;
  align-items: center;
}
.modal__exit-btn:hover {
  width: 20px;
  height: 20px;
  transition: 0;
  opacity: 0.75;
}

.modal__exit {
  float: right;
  margin: 5px 4px 5px;
  border: 0;
  border-radius: 100%;
  text-align: center;
  line-height: 20px;
  transition: 0.1s;
  color: #000;
  width: 22px;
  height: 22px;
  background: none;
  cursor: pointer;
}

.modal__content {
  display: flex;
  gap: 10px;
  color: #6d7095;
  padding-bottom: 7px;
}

.modal__available-columns,
.modal__choosen-columns {
  width: 100%;
}
.modal__header-wrapper {
  margin-bottom: 27px;
}
.available__rows,
.choosen__rows {
  border: 1px solid;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-color: #6d7095;
  overflow: scroll;
}
.available__row,
.choosen__row {
  transition: 0.08s;
  height: 40px;
  width: 95%;
  line-height: 40px;
  padding: 0 10px;
  text-align: start;
  border-radius: 10px;
  border: 0;
  color: #6d7095;
  background-color: #fff;
  &:hover {
    font-size: 14px;
    height: 48px;
    width: 100%;
    background-color: #f4f4f4;
  }
}

.selectors {
  display: flex;
  width: fit-content;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
  color: #6d7095;
  & > * {
    display: flex;
    gap: 10px;
  }
}
.selectors_btn {
  color: #6d7095;
}
.arrow {
  position: absolute;
  width: 1.5vmin;
  height: 1.5vmin;
  background: transparent;
  border-top: 0.4vmin solid #6d7095;
  border-right: 0.4vmin solid #6d7095;
  box-shadow: 0 0 0 lightgray;
  transition: all 200ms ease;
  margin: 20px 0 0 15px;

  &.left {
    transform: translate3d(0, -50%, 0) rotate(-135deg);
  }

  &.right {
    transform: translate3d(0, -50%, 0) rotate(45deg);
  }

  &:hover {
    border-color: #6d7099;
    box-shadow: 0.5vmin -0.5vmin 0 #8d91ba;
  }
}
</style>
