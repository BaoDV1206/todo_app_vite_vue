<template lang="">
    <div class="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
            <i class="material-icons" 
            @click="taskStore.deleteTask(task.id)">
            delete
        </i>
            <i class="material-icons" 
            :class="{active: task.isFav}"
            @click="taskStore.toggleFav(task.id)">
            favorite
        </i>
        <i class="material-icons" 
            @click="handleEditPopup(task.id)">
            edit
        </i>
        </div>
    </div>
    <div class="popup">
        <Popup v-if="taskStore.openPopup" :tasks="currentTask"/>
    </div>
</template>
<script>
import { ref } from 'vue';
import { useTaskStore } from '../../stores/TaskStore';
import Popup from '../popup/Popup.vue';
const currentTask = ref(null);
const handleEditPopup = (id) => {
    const taskStore = useTaskStore();
    currentTask.value = taskStore.tasks.map((item) => item).filter((item) => item.id === id);
    taskStore.openPopup = !taskStore.openPopup;
    console.log('task', currentTask)
}
export default {
    setup() {
        const taskStore = useTaskStore();
        return {
            taskStore
        }
    },
    components: {
        Popup
    },
    props: ['task'],
    data() {
        return {
            currentTask
        }
    },
    methods: {
        handleEditPopup
    }
}
</script>
<style>
.task {
    padding: 6px 20px;
    background: #fff;
    margin-top: 20px;
    border-radius: 4px;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.task h3,
.task .icons {
    font-size: 1.2em;
    display: inline-block;
}

.task .icons {
    text-align: right;
}

.task i {
    font-size: 1.4em;
    margin-left: 6px;
    cursor: pointer;
    color: #bbb;
}

.task i.active {
    color: #ff005d;
}

.filter {
    width: 640px;
    margin: 10px auto;
    text-align: right;
}

.filter button {
    display: inline-block;
    margin-left: 10px;
    background: #fff;
    border: 2px solid #555;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
    font-size: 1em;
}
</style>