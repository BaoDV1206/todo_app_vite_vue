<template >
  <div class="popup">
    <div class="popup-inner">
      <slot />
      <form @submit.prevent="handleSubmit(e)">
        <input type="text" v-model="titleTemp" placeholder="Do you want ...">
        <div class="checkbox">
          <input v-model="isFavTemp" type="checkbox" id="checkbox">
          <label>isFavorite</label>
        </div>
        <button>Update</button>
      </form>
      <button class="popup-close" @click="taskStore.handleOpenPopup">Close Popup</button>
    </div>
  </div>
</template>
<script >
import { useTaskStore } from '../../stores/TaskStore';
import {ref} from 'vue'
export default {
  props: {
    tasks: Object
  },
  setup(props) {
    const taskStore = useTaskStore();
    const titleTemp = ref(props.tasks[0].title);
    const isFavTemp = ref(props.tasks[0].isFav);
    const handleSubmit = (e) => {
      const taskToUpdate = props.tasks[0];
      console.log('popup submit', taskToUpdate.title)
      const newTask = {
        title: titleTemp.value,
        isFav: isFavTemp.value
      }
      taskStore.handleUpateTask(taskToUpdate.id, newTask)
    }
    return {
      taskStore,
      taskObj: props.tasks,
      handleSubmit,
      titleTemp,
      isFavTemp
    }
  }
};
</script>
<style lang="css" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-inner {
  background: #FFF;
  padding: 32px;
}
</style>