import { defineStore } from 'pinia';

interface Task {
  id: number;
  title: string;
  isFav: boolean;
}

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      { id: 1, title: "buy some milk", isFav: false },
      { id: 2, title: "buy some girl friend", isFav: true }
    ] as Task[],
    name: 'BaoDV3',
    itemsPerPage: 3,
    currentPage: 1,
    openPopup: false
  }),
  getters: {
    favs(state) {
      return state.tasks.filter((task) => task.isFav);
    },
    favCount(state) {
      return state.tasks.reduce((count, task) => (task.isFav ? count + 1 : count), 0);
    },
    totalCount(state) {
      return state.tasks.length;
    },
    totalPages(state) {
      return Math.ceil(state.tasks.length / state.itemsPerPage);
    },
    paginatedTodo(state) {
      const startIndex = (state.currentPage - 1) * state.itemsPerPage;
      const endIndex = startIndex + state.itemsPerPage;
      return state.tasks.slice(startIndex, endIndex);
    }
  },
  actions: {
    addTask(task: Task) {
      this.tasks.push(task);
    },
    deleteTask(id: number) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleFav(id: number) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.isFav = !task.isFav;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    updatePerPage(page: String) {
      this.itemsPerPage = page;
      this.currentPage = 1;
    },
    handleOpenPopup() {
      this.openPopup = !this.openPopup;
    },
    handleUpateTask(id: number, newTask: Task) {
      const task = this.tasks.find((t) => t.id === id);
      if (task) {
        task.title = newTask.title;
        task.isFav = newTask.isFav;
      }
    }
  }
});
