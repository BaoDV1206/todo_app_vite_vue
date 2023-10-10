<template>
    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="Do you want ..." v-model="newTask" />
      <div class="checkbox">
        <input type="checkbox" id="checkbox" v-model="ischecked" />
        <label>isFavorite</label>
      </div>
      <button>Add</button>
    </form>
  </template>
  
  <script setup lang="ts">
  import { useTaskStore } from '../../stores/TaskStore';
  import { ref } from 'vue';
  
  const taskStore = useTaskStore();
  const newTask = ref<string>('');
  const ischecked = ref<boolean>(true);
  
  const handleSubmit = () => {
    console.log('checked', ischecked.value);
    if (newTask.value.length > 0) {
      taskStore.addTask({
        title: newTask.value,
        isFav: ischecked.value,
        id: Math.floor(Math.random() * 10000),
      });
      newTask.value = '';
    }
  };
  </script>
  
<style>
.checkbox {
    display: flex;
    text-align: center;
    align-items: center;
}
.checkbox #checkbox {
    width: 30px;
    height: 30px;
    margin-right: 10px;
}
.checkbox label {
    font-size: 1.2em;
}
</style>