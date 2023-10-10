<script setup lang="ts">
import { useTaskStore } from '../stores/TaskStore';
import TaskDetails from '../components/task/TaskDetails.vue';
import TaskForm from '../components/task/TaskForm.vue';
import { ref } from 'vue';

const taskStore = useTaskStore();
const filter = ref<String | undefined>('all');
const selected = ref<String>('3');
// console.log(import.meta.env)
</script>

<template>
  <div class="todo">
    <!-- header -->
    <header>
      <img src="../assets//new-logo-only-the-brave.svg" alt="logo_otb" />
      <h1>Only The Brave {{ taskStore.name }}</h1>
    </header>

    <!-- new task form -->
    <div class="new-task-form">
      <TaskForm />
    </div>
    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'" >All tasks</button>
      <button @click="filter = 'favs'" >Fav tasks</button>
    </nav>

    <!-- task list -->
    <div class="task-container" v-if="taskStore.totalCount > 0">
      <div class="task-list" v-if="filter === 'all'">
        <p>You have {{ taskStore.totalCount }} tasks</p>
        <div v-for="(task, index) in taskStore.paginatedTodo" :key="index">
          <TaskDetails :task="task" />
        </div>
      </div>
      <div class="task-list" v-if="filter === 'favs'">
        <p>You have {{ taskStore.favCount }} tasks Fav</p>
        <div v-for="(task, index) in taskStore.favs" :key="index">
          <TaskDetails :task="task" />
        </div>
      </div>
      <!-- pagination todo -->
      <div class="pagination">
        <select  v-model="selected" @change="taskStore.updatePerPage(selected)">
          <option value="3">3 task</option>
          <option value="4">4 task</option>
          <option value="5">5 task</option>
        </select>
        <button @click="taskStore.previousPage" :disabled="taskStore.currentPage === 1">Previous</button>
        <span>Page {{ taskStore.currentPage }} of {{ taskStore.totalPages }}</span>
        <button @click="taskStore.nextPage" :disabled="taskStore.currentPage === taskStore.totalPages">Next-></button>
      </div>
    </div>
    <div class="not-task" v-else>
      <p>404 not found</p>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gabarito:wght@400;500;600;800&display=swap');

.todo {
  background: #f2f2f2;
  color: #444;
  margin: 0;
}

.todo {
  font-family: 'Gabarito';
}

header {
  background: #e7e7e7;
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

header img {
  max-width: 80px;
  transform: rotate(-10deg);
}

header h1 {
  margin: 0;
  font-size: 2rem;
  padding-top: 25px;
  padding-left: 15px;
  color: #777;
  transform: rotate(2deg);
}

.task-list {
  max-width: 640px;
  margin: 20px auto;
  padding-bottom: 10px;
}

.task-list p {
  font-size: 1em;
}

.new-task-form {
  background: #e7e7e7;
  padding: 20px 0;
}

form {
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 10px;
}

form button {
  background: #ffd859;
  border: 0;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1em;
}

form input {
  border: 0;
  padding: 10px;
  border-radius: 6px;
  color: #555;
  font-size: 1em;
}

.not-task {
  max-width: 400px;
  margin: 30px auto;
  text-align: center;
  padding-bottom: 50px;

}

.pagination {
  max-width: 640px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1000px;
}

.pagination button {
  border-radius: 5px;
}

.pagination select {
  border-radius: 5px;
  color: cadetblue;
  padding: 2px 4px;
}
</style>
