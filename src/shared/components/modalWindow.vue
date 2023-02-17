<script lang="ts">
export default { name: 'modal-window' };
</script>
<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();


</script>

<template>
  <modal class="modal" @click="$emit('close')">
    <div class="modal__wrapper">
      <div class="modal__container" @click.stop>
        <slot />
      </div>
    </div>
  </modal>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000080;
  display: table;
  transition: opacity 0.3s ease;
}

.modal__wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal__container {
  width: 700px;
  margin: 0px auto;
  padding: 40px 60px;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}


</style>
